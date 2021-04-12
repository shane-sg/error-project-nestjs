import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmInterceptor } from 'src/components/type-orm-interceptor';
import { TypeOrmFilter } from 'src/components/type-orm-filter';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserController],
  providers: [UserService, TypeOrmInterceptor, TypeOrmFilter],
  exports: [UserService],
})
export class UserModule {}
