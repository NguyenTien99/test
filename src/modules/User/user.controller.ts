import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
  Query
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { FindAllQuery } from './dto/find-all.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  findAll(@Query() query: FindAllQuery) {
    const paging = { page: query.page, pageSize: query.pageSize };
    return this.userService.findAllWithCondition(query);
  }

  @Get('/users/:id')
  findById(@Param('id') id: string) {
    console.log(id);

    // Xử lý trả lỗi về cho client
    // throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    throw new NotFoundException('user not found');
  }

  // Override status code bằng res của express
  // @Post('/users')
  // create(@Res() res: Response) {
  //   res.status(201).json('Create user success');
  // }

  // Override status code bằng HttpCode decorator
  @Post('/users')
  @HttpCode(201)
  create() {
    return 'Create user success';
  }
}
