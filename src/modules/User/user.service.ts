import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Paging } from './dto/find-all.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAllWithCondition(paging: Paging) {
    try {
      const { page, pageSize } = paging;
      const total = await this.userRepository.count();
      const users = await this.userRepository.find({
        take: pageSize,
        skip: (page - 1) * pageSize,
      });

      return {
        data: users,
        paging: {
          total,
          page,
          pageSize,
        },
      };
    } catch (error) {
      throw error;
    }
  }
}

