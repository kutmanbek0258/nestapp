import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NmailerModule } from './nmailer/nmailer.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/sumsar_reail', {
      authSource: 'admin',
      user: 'mongoadmin',
      pass: 'sMANovKutman'
    }),
    UserModule,
    AuthModule,
    NmailerModule
  ],
})
export class AppModule {}
