import { Injectable} from "@nestjs/common";
import {userStore} from './userStore'

@Injectable()
export class GetUsersService{
    getUsers(){
        return userStore ;
    }
}