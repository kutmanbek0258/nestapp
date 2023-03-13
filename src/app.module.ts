import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NmailerModule } from './nmailer/nmailer.module';
import { ReferenceModule } from './reference/reference.module';
import { DocumentModule } from './document/document.module';
import { AppLoggerMiddleware } from './middleware/http-logger.middleware';
import { AutomationModule } from './automation/automation.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot('mongodb://10.214.2.42/ebt_automation', {
      // connectionName: 'sumsar_retail',
      authSource: 'admin',
      user: 'mongoadmin',
      pass: 'sMANovKutman',
    }),
    UserModule,
    AuthModule,
    NmailerModule,
    ReferenceModule,
    DocumentModule,
    AutomationModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
