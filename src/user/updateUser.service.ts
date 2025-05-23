import { Injectable } from '@nestjs/common';
import {userStore} from './userStore'
import { User } from './userStore';

@Injectable()
export class UpdateUserService{
    updateUser(user:User, id:number){
        const updatedUser = userStore.find(user => user.id == id);
        console.log("User to be update: ",updatedUser);
        const idx = userStore.findIndex(user => user.id == id);
        userStore[idx] = user;
        return "User Updated"
    }
}