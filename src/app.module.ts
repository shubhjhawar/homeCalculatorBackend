import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DistanceService } from './distance/distance.service';
import { DistanceController } from './distance/distance.controller';
import { SendGridService } from './send-grid/send-grid.service';
import { EmailController } from './email/email.controller';

@Module({
  imports: [],
  controllers: [AppController, DistanceController, EmailController],
  providers: [AppService, DistanceService, SendGridService],
})
export class AppModule {}
