import { IsNotEmpty, IsString } from 'class-validator';

export class SendEmailDto {
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  hoursRangeStart: string;

  @IsString()
  @IsNotEmpty()
  hoursRangeEnd: string;

  @IsString()
  @IsNotEmpty()
  movingDate: string;

  @IsString()
  @IsNotEmpty()
  additionalDetails: string;

  @IsString()
  @IsNotEmpty()
  movingDetails: string;
}
