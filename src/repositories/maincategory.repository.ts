import {DefaultCrudRepository} from '@loopback/repository';
import {Maincategory, MaincategoryRelations} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MaincategoryRepository extends DefaultCrudRepository<
  Maincategory,
  typeof Maincategory.prototype.id,
  MaincategoryRelations
> {
  constructor(@inject('datasources.mysqlDs') dataSource: MysqlDsDataSource) {
    super(Maincategory, dataSource);
  }
}
