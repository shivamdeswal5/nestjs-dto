import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import { GetUsersService } from './getUsers.service';
import { GetUserByIdService } from './getUsersById.service';
import { CreateUserService } from './createUser.service';
import { User } from './interface/user.interface';
import { DeleteUserService } from './deleteUser.service';
import { UpdateUserService } from './updateUser.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UserController {
    constructor(
        private getUserService : GetUsersService,
        private getUserByIdService: GetUserByIdService,
        private createUserService : CreateUserService,
        private deleteUserService : DeleteUserService,
        private updateUserService : UpdateUserService
    ){}

    @Get()
    getUsers() : User[] {
        return this.getUserService.getUsers();
    }

    @Get(':id')
    getUsersById(@Param('id', ParseIntPipe) id: number){
        return this.getUserByIdService.getUserById(id);        
    }

    @Post()
    createUser(@Body() user: CreateUserDto ){
        console.log("User to be added: ", user)
        return this.createUserService.createUsers(user);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
        return this.deleteUserService.deleteUser(id);
    }

    @Put(':id')
    updateUser(@Body()  user: CreateUserDto, @Param('id', ParseIntPipe) id: number){
        console.log("updated  user data: ",user)
        return this.updateUserService.updateUser(user,id);   
    }

}
