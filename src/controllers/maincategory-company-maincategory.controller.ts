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
  Maincategory,
} from '../models';
import {MaincategoryCompanyRepository} from '../repositories';

export class MaincategoryCompanyMaincategoryController {
  constructor(
    @repository(MaincategoryCompanyRepository)
    public maincategoryCompanyRepository: MaincategoryCompanyRepository,
  ) { }

  @get('/maincategory-companies/{id}/maincategory', {
    responses: {
      '200': {
        description: 'Maincategory belonging to MaincategoryCompany',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Maincategory)},
          },
        },
      },
    },
  })
  async getMaincategory(
    @param.path.number('id') id: typeof MaincategoryCompany.prototype.id,
  ): Promise<Maincategory> {
    return this.maincategoryCompanyRepository.maincategory(id);
  }
}
