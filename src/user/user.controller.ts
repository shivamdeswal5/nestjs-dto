import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { GetUsersService } from './getUsers.service';
import { GetUserByIdService } from './getUsersById.service';
import { CreateUserService } from './createUser.service';
import { User } from './userStore';
import { DeleteUserService } from './deleteUser.service';
import { UpdateUserService } from './updateUser.service';

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
    getUsers(){
        return this.getUserService.getUsers();
    }

    @Get(':id')
    getUsersById(@Param('id', ParseIntPipe) id: number){
        return this.getUserByIdService.getUserById(id);        
    }

    @Post()
    createUser(@Body() user:User ){
        console.log("User to be added: ", user)
        return this.createUserService.createUsers(user);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
        return this.deleteUserService.deleteUser(id);
    }

    @Put(':id')
    updateUser(@Body() user:User, @Param('id', ParseIntPipe) id: number){
        console.log("updated  user data: ",user)
        return this.updateUserService.updateUser(user,id);   
    }

}
