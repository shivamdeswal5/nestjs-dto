import { Injectable} from "@nestjs/common";
import {userStore} from './userStore'
import { User } from "./userStore";

@Injectable()
export class CreateUserService{
    createUsers(user:User){
        userStore.push(user) ;
        return "User Created"
    }
}