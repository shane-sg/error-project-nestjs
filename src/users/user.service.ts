import {
  Logger,
  UseFilters,
  UseInterceptors,
  NotFoundException,
} from '@nestjs/common';
import { Users } from './users.entity';
import { CreateUserDto } from './create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { TypeOrmInterceptor } from '../components/type-orm-interceptor';
import { TypeOrmFilter } from 'src/components/type-orm-filter';

export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly connection: Connection,
  ) {
    console.log('User service constructor');
  }

  findAll() {
    this.logger.log('IS THIS GOING TO PRINT?');
    return this.userRepository.findOne();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  @UseInterceptors(TypeOrmInterceptor)
  async createInterceptor(createUserDto: CreateUserDto) {
    console.log('< service::users/interceptor >');
    const user = this.userRepository.create(createUserDto);
    try {
      const result = await this.userRepository.save(user);
      return result;
    } catch (error) {
      console.log('\nERROR: \n');
      console.log(error);
      console.log('\n');
      throw error;
    }
  }

  @UseFilters(TypeOrmFilter)
  async createFilter(createUserDto: CreateUserDto) {
    console.log('< service::users/filter >');
    const user = this.userRepository.create(createUserDto);
    try {
      const result = await this.userRepository.save(user);
      return result;
    } catch (error) {
      console.log('\nERROR: \n');
      console.log(error);
      console.log('\n');
      throw error;
    }
  }
}
