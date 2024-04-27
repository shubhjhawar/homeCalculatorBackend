import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DistanceService } from './distance.service';

@Controller('distance')
export class DistanceController {
  constructor(private readonly distanceService: DistanceService) {}

  @Get()
  async getDistance(
    @Query('origins') origins: string,
    @Query('destinations') destinations: string,
  ) {
    if (!origins || !destinations) {
      throw new HttpException(
        'Origins and destinations are required',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.distanceService.getDistance(origins, destinations);
  }
}
