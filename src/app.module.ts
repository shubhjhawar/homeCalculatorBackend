import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DistanceService } from './distance/distance.service';
import { DistanceController } from './distance/distance.controller';

@Module({
  imports: [],
  controllers: [AppController, DistanceController],
  providers: [AppService, DistanceService],
})
export class AppModule {}
