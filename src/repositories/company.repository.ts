import {DefaultCrudRepository} from '@loopback/repository';
import {Company, CompanyRelations} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompanyRepository extends DefaultCrudRepository<
  Company,
  typeof Company.prototype.id,
  CompanyRelations
> {
  constructor(
    @inject('datasources.mysqlDs') dataSource: MysqlDsDataSource,
  ) {
    super(Company, dataSource);
  }
}
