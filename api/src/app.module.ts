import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

// modules
import { AccountsModule } from './modules/accounts/accounts.module'
import { MainModule } from './modules/main.module';

// config modules
import { ConfigModule } from './app.config.module'
import { DocumentationModule } from './modules/documentation/documentation.module';
import { MongodbProvider } from './providers/mongodb.provider';
import { AppMiddleware } from './middlewares/app.middleware';


@Module({
  imports: [
    // controller modules
    MainModule,
    AccountsModule,
    DocumentationModule,
    // mongodb
    MongodbProvider
  ],
  providers: [ConfigModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppMiddleware)
      .forRoutes('*')
  }
}
