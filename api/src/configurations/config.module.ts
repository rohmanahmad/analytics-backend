import { Module } from '@nestjs/common';

// configs
import { EnvService } from './providers/env.provider'


@Module({
  providers: [
    {
      provide: EnvService,
      useValue: new EnvService(`${process.env.NODE_ENV || 'development'}.env`)
    }
  ],
  exports: [EnvService]
})
export class ConfigModule {}
