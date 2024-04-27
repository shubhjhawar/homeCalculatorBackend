import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DistanceService {
  private readonly apiKey = process.env.GOOGLE_API_KEY;

  private encodeGoogleMapsURLComponent(str) {
    return str.replace(/ /g, '+');
  }

  async getDistance(origins: string, destinations: string): Promise<any> {
    const params = {
      origins: this.encodeGoogleMapsURLComponent(origins),
      destinations: this.encodeGoogleMapsURLComponent(destinations),
      key: this.apiKey,
      units: 'imperial',
    };

    try {
      const response = await axios.get(
        'https://maps.googleapis.com/maps/api/distancematrix/json',
        { params },
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve distance',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
