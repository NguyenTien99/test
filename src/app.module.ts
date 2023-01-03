import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/User/user.module';
import { User } from './modules/User/user.model';

// Khai báo DB connection
const AppDataSource = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'Demo',
  synchronize: true,
  entities: [User],
});

// Decorator
@Module({
  // Khai báo các modules cho application
  // Các sub modules cần được khai báo mới có thể hoạt động
  imports: [UserModule],
  // Khai báo các controllers cho application
  controllers: [AppController],
  // Khai báo các services sẽ được sử dụng trong các controllers
  providers: [AppService],
})
export class AppModule {}
