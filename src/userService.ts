import {Injectable } from "@angular/core";

@Injectable()
export class UserService {
    private users:any = [
        {id:"1", firstName:"Dao",lastName:"Tung"},
        {id:"2", firstName:"Tran",lastName:"Lap"},
        {id:"3", firstName:"Thanh",lastName:"Ha"},
        {id:"4", firstName:"Tran",lastName:"Hung"},
    ];

    public getUsers(): any {
        return this.users;
    }
}