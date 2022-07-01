import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainsController } from './domains.controller';
import { DomainsService } from './domains.service';
import { Domain, DomainSchema } from './schemas/domain.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Domain.name, schema: DomainSchema }]),
  ],
  controllers: [DomainsController],
  providers: [DomainsService],
})
export class DomainsModule {}
