import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDomainDto } from './dto/create-domain.dto';
import { Domain, DomainDocument } from './schemas/domain.schema';

@Injectable()
export class DomainsService {
  constructor(
    @InjectModel(Domain.name)
    private readonly DomainModel: Model<DomainDocument>,
  ) {}

  async create(createDomainDto: CreateDomainDto): Promise<Domain> {
    const createdDomain = await this.DomainModel.create(createDomainDto);
    return createdDomain;
  }

  async findAll(): Promise<Domain[]> {
    return this.DomainModel.find().exec();
  }
}
