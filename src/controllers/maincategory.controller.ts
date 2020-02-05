import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Maincategory} from '../models';
import {MaincategoryRepository} from '../repositories';

export class MaincategoryController {
  constructor(
    @repository(MaincategoryRepository)
    public maincategoryRepository : MaincategoryRepository,
  ) {}

  @post('/maincategories', {
    responses: {
      '200': {
        description: 'Maincategory model instance',
        content: {'application/json': {schema: getModelSchemaRef(Maincategory)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Maincategory, {
            title: 'NewMaincategory',
            
          }),
        },
      },
    })
    maincategory: Maincategory,
  ): Promise<Maincategory> {
    return this.maincategoryRepository.create(maincategory);
  }

  @get('/maincategories/count', {
    responses: {
      '200': {
        description: 'Maincategory model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Maincategory)) where?: Where<Maincategory>,
  ): Promise<Count> {
    return this.maincategoryRepository.count(where);
  }

  @get('/maincategories', {
    responses: {
      '200': {
        description: 'Array of Maincategory model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Maincategory, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Maincategory)) filter?: Filter<Maincategory>,
  ): Promise<Maincategory[]> {
    return this.maincategoryRepository.find(filter);
  }

  @patch('/maincategories', {
    responses: {
      '200': {
        description: 'Maincategory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Maincategory, {partial: true}),
        },
      },
    })
    maincategory: Maincategory,
    @param.query.object('where', getWhereSchemaFor(Maincategory)) where?: Where<Maincategory>,
  ): Promise<Count> {
    return this.maincategoryRepository.updateAll(maincategory, where);
  }

  @get('/maincategories/{id}', {
    responses: {
      '200': {
        description: 'Maincategory model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Maincategory, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Maincategory)) filter?: Filter<Maincategory>
  ): Promise<Maincategory> {
    return this.maincategoryRepository.findById(id, filter);
  }

  @patch('/maincategories/{id}', {
    responses: {
      '204': {
        description: 'Maincategory PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Maincategory, {partial: true}),
        },
      },
    })
    maincategory: Maincategory,
  ): Promise<void> {
    await this.maincategoryRepository.updateById(id, maincategory);
  }

  @put('/maincategories/{id}', {
    responses: {
      '204': {
        description: 'Maincategory PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() maincategory: Maincategory,
  ): Promise<void> {
    await this.maincategoryRepository.replaceById(id, maincategory);
  }

  @del('/maincategories/{id}', {
    responses: {
      '204': {
        description: 'Maincategory DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.maincategoryRepository.deleteById(id);
  }
}
