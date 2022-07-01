import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DomainDocument = Domain & Document;

@Schema()
export class Domain {
  @Prop()
  name: string;

  @Prop()
  information: string;
}

export const DomainSchema = SchemaFactory.createForClass(Domain);
