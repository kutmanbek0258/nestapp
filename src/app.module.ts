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

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/sumsar_retail', {
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
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
