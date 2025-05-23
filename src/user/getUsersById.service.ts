import { Injectable} from "@nestjs/common";
import {userStore} from './store/userStore'

@Injectable()
export class GetUserByIdService{
    getUserById(id:number){
        return userStore.find((user)=> user.id === id) ;
    }
}