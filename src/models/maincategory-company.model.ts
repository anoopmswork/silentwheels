import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Maincategory} from './maincategory.model';
import {Company} from './company.model';

@model({settings: {strict: false}})
export class MaincategoryCompany extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => Maincategory)
  maincategoryId: number;

  @belongsTo(() => Company)
  companyId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MaincategoryCompany>) {
    super(data);
  }
}

export interface MaincategoryCompanyRelations {
  // describe navigational properties here
}

export type MaincategoryCompanyWithRelations = MaincategoryCompany &
  MaincategoryCompanyRelations;
