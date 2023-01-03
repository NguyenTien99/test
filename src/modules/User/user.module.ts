import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  imports: [
    // Khai báo sử dụng entity trong các services do UserModule quản lí
    TypeOrmModule.forFeature(User),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
