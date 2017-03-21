import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { UserRoutes } from "./userRoutes";
import { Users } from "./users";
import { FormPreview } from "./formPreview";
import { UserService } from "./userService";
import { Page } from "./page";
import { FormButtonPrimary } from "./formButtonPrimary";
import { FormInput } from "./formInput";
import { FormButton } from "./formButton";
import { FormHorizontal } from "./formHorizontal";

@NgModule({
    imports: [BrowserModule, FormsModule,UserRoutes],
    declarations: [DefaultPage,Users,FormPreview, Page, FormHorizontal, 
                    FormInput, FormButton, FormButtonPrimary],
    bootstrap: [DefaultPage], 
    providers: [UserService],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SecurityModule { }
