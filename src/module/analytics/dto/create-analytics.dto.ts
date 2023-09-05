import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAnalyticsDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  name: string;
}
