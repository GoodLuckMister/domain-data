import { Body, Controller, Get, Post } from '@nestjs/common';
import { DomainsService } from './domains.service';
import { CreateDomainDto } from './dto/create-domain.dto';
import { Domain } from './schemas/domain.schema';

@Controller('domains')
export class DomainsController {
  constructor(private readonly domainsService: DomainsService) {}

  @Post()
  async create(@Body() createDomainDto: CreateDomainDto) {
    const result = await this.domainsService.create(createDomainDto);
    return result;
  }

  @Get()
  async findAll(): Promise<Domain[]> {
    return this.domainsService.findAll();
  }
}
