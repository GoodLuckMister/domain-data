import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainsModule } from './domains/domains.module';
import { join } from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot(process.env.DATABASE),
    DomainsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
