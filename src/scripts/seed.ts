import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { AnalyticsModule } from '../module/analytics/analytics.module';
import { AnalyticsService } from '../module/analytics/analytics.service';

async function SeedDatabase() {
  console.log(' === Database seeding - start =====');

  const app = await NestFactory.create(AppModule);
  const analyticsService = app
    .select(AnalyticsModule)
    .get(AnalyticsService, { strict: true });
  await analyticsService.seedAnalytics();
  console.log(' === Database seeding - end =====');

  process.exit(0);
}

SeedDatabase().catch((e) => {
  console.error(e);
  process.exit(0);
});
