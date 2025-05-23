import { Injectable} from "@nestjs/common";
import {userStore} from './store/userStore'
import { CreateUserDto } from "./dto/createUser.dto";

@Injectable()
export class CreateUserService{
    createUsers(user:CreateUserDto){
        userStore.push(user) ;
        return user;
    }
}