import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserService } from './users/user.service';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'test',
        database: 'filter_pipe_testing',
        // entities: [],
        autoLoadEntities: true, // models will be loaded automatically (you don't have to explicitly specify the entities: [] array)
        synchronize: true,
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
