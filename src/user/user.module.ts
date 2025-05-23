import {Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { GetUsersService } from './getUsers.service';
import { GetUserByIdService } from './getUsersById.service';
import { CreateUserService } from './createUser.service';
import { DeleteUserService } from './deleteUser.service';
import { UpdateUserService } from './updateUser.service';

@Module({
  controllers: [UserController],
  providers: [GetUsersService, GetUserByIdService,CreateUserService,DeleteUserService,UpdateUserService]
})
export class UserModule {}
