import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

import { Analytics } from 'src/entities/Analytics';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(Analytics)
    private readonly analyticsRepository: MongoRepository<Analytics>,
  ) {}

  async create(createAnalyticsDto: CreateAnalyticsDto): Promise<void> {
    await this.analyticsRepository.insert(createAnalyticsDto);
  }

  async findAll(): Promise<Analytics[]> {
    return this.analyticsRepository.find({});
  }
}
