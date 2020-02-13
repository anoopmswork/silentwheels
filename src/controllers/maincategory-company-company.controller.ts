import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  MaincategoryCompany,
  Company,
} from '../models';
import {MaincategoryCompanyRepository} from '../repositories';

export class MaincategoryCompanyCompanyController {
  constructor(
    @repository(MaincategoryCompanyRepository)
    public maincategoryCompanyRepository: MaincategoryCompanyRepository,
  ) { }

  @get('/maincategory-companies/{id}/company', {
    responses: {
      '200': {
        description: 'Company belonging to MaincategoryCompany',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Company)},
          },
        },
      },
    },
  })
  async getCompany(
    @param.path.number('id') id: typeof MaincategoryCompany.prototype.id,
  ): Promise<Company> {
    return this.maincategoryCompanyRepository.company(id);
  }
}
