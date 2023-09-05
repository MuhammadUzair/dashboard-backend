import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl: url, ip } = req;
    const start = Date.now();
    res.on('finish', () => {
      const end = Date.now();
      const executionTime = end - start;
      // IP - method - URL - Status Code - Execution Time
      console.log(
        `${ip} ${method} ${url} - ${res.statusCode} - Execution Time: ${executionTime}ms`,
      );
    });
    next();
  }
}
