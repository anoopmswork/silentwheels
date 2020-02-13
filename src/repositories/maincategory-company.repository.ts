import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MaincategoryCompany, MaincategoryCompanyRelations, Maincategory, Company} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {MaincategoryRepository} from './maincategory.repository';
import {CompanyRepository} from './company.repository';

export class MaincategoryCompanyRepository extends DefaultCrudRepository<
  MaincategoryCompany,
  typeof MaincategoryCompany.prototype.id,
  MaincategoryCompanyRelations
> {

  public readonly maincategory: BelongsToAccessor<Maincategory, typeof MaincategoryCompany.prototype.id>;

  public readonly company: BelongsToAccessor<Company, typeof MaincategoryCompany.prototype.id>;

  constructor(
    @inject('datasources.mysqlDs') dataSource: MysqlDsDataSource, @repository.getter('MaincategoryRepository') protected maincategoryRepositoryGetter: Getter<MaincategoryRepository>, @repository.getter('CompanyRepository') protected companyRepositoryGetter: Getter<CompanyRepository>,
  ) {
    super(MaincategoryCompany, dataSource);
    this.company = this.createBelongsToAccessorFor('company', companyRepositoryGetter,);
    this.registerInclusionResolver('company', this.company.inclusionResolver);
    this.maincategory = this.createBelongsToAccessorFor('maincategory', maincategoryRepositoryGetter,);
    this.registerInclusionResolver('maincategory', this.maincategory.inclusionResolver);
  }
}
