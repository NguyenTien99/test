import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

//Cần import vào array Entities của TypeOrmModule ở app.module.ts để nó hoạt động
// Với các services nào cần sử dụng User entity để tương tác với DB, ta sủ dụng repository pattern
// - Ở module quản lí service đó, ta khai báo TypeOrmModule.forFeature([User])
// - Trong service ta dùng InjectRepository để inject nó vào bên trong service

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'first_name', // Khai báo tên column dưới db
  })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column({
    name: 'email',
    nullable: false, // Không được phép null
    unique: true, // Không được trùng
  })
  email: string;

  @Column({
    name: 'role',
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;
}
