import cookieParser from 'cookie-parser';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
