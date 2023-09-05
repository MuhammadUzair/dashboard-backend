import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalyticsDto } from './create-analytics.dto';

export class UpdateCreateAnalyticsDtoDto extends PartialType(
  CreateAnalyticsDto,
) {}
