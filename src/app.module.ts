import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainsModule } from './domains/domains.module';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot(
      'mongodb+srv://Pirogok0_0:Pirogok12345@myfreecluster.f3lsj.mongodb.net/?retryWrites=true&w=majority',
    ),
    DomainsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
