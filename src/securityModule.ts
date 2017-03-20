import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { UserRoutes } from "./userRoutes";
import { Users } from "./users";
import { FormPreview } from "./formPreview";
import { UserService } from "./userService";

@NgModule({
    imports: [BrowserModule, FormsModule,UserRoutes],
    declarations: [DefaultPage,Users,FormPreview],
    bootstrap: [DefaultPage], 
    providers: [UserService]
})
export class SecurityModule { }
