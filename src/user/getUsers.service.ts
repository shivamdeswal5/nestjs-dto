import { Injectable} from "@nestjs/common";
import {userStore} from './store/userStore'

@Injectable()
export class GetUsersService{
    getUsers(){
        return userStore ;
    }
}