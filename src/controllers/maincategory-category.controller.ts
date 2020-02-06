import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Maincategory,
  Category,
} from '../models';
import {MaincategoryRepository} from '../repositories';

export class MaincategoryCategoryController {
  constructor(
    @repository(MaincategoryRepository) protected maincategoryRepository: MaincategoryRepository,
  ) { }

  @get('/maincategories/{id}/categories', {
    responses: {
      '200': {
        description: 'Array of Category\'s belonging to Maincategory',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Category)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Category>,
  ): Promise<Category[]> {
    return this.maincategoryRepository.categories(id).find(filter);
  }

  @post('/maincategories/{id}/categories', {
    responses: {
      '200': {
        description: 'Maincategory model instance',
        content: {'application/json': {schema: getModelSchemaRef(Category)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Maincategory.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Category, {
            title: 'NewCategoryInMaincategory',
            exclude: ['id'],
            optional: ['maincategoryId']
          }),
        },
      },
    }) category: Omit<Category, 'id'>,
  ): Promise<Category> {
    return this.maincategoryRepository.categories(id).create(category);
  }

  @patch('/maincategories/{id}/categories', {
    responses: {
      '200': {
        description: 'Maincategory.Category PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Category, {partial: true}),
        },
      },
    })
    category: Partial<Category>,
    @param.query.object('where', getWhereSchemaFor(Category)) where?: Where<Category>,
  ): Promise<Count> {
    return this.maincategoryRepository.categories(id).patch(category, where);
  }

  @del('/maincategories/{id}/categories', {
    responses: {
      '200': {
        description: 'Maincategory.Category DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Category)) where?: Where<Category>,
  ): Promise<Count> {
    return this.maincategoryRepository.categories(id).delete(where);
  }
}
