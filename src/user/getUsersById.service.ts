import { Injectable} from "@nestjs/common";
import {userStore} from './userStore'

@Injectable()
export class GetUserByIdService{
    getUserById(id:number){
        return userStore.find((user)=> user.id === id) ;
    }
}