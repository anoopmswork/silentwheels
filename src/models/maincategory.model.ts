import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Maincategory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'boolean',
    required: true,
    default: true,
  })
  status: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Maincategory>) {
    super(data);
  }
}

export interface MaincategoryRelations {
  // describe navigational properties here
}

export type MaincategoryWithRelations = Maincategory & MaincategoryRelations;
