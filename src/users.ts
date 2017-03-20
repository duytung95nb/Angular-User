import { Component } from "@angular/core";
import { UserService } from "./userService";

@Component({
    templateUrl:"src/users.html"
})
export class Users{
    private users:any;
    private selectedUser:any;
    constructor(userService:UserService){
        this.users = userService.getUsers();
    }
    public onSelected(user:any){
        this.selectedUser = user;
    }

}