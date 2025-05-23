import { Injectable } from '@nestjs/common';
import {userStore} from './store/userStore'

@Injectable()
export class DeleteUserService{
    deleteUser(id:number){
        const user = userStore.find(user => user.id == id);
        console.log("User to be deleted: ",user);
        userStore.splice(userStore.findIndex(user => user.id == id),1)
        return user;
    }
}