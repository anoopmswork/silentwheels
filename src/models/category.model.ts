import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Category extends Entity {
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
  Category: string;

  @property({
    type: 'number',
    required: true,
  })
  Activity: number;

  @property({
    type: 'boolean',
    required: true,
  })
  Status: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
