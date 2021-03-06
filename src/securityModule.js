"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const defaultPage_1 = require("./defaultPage");
const userRoutes_1 = require("./userRoutes");
const users_1 = require("./users");
const formPreview_1 = require("./formPreview");
const userService_1 = require("./userService");
const page_1 = require("./page");
const formButtonPrimary_1 = require("./formButtonPrimary");
const formInput_1 = require("./formInput");
const formButton_1 = require("./formButton");
const formHorizontal_1 = require("./formHorizontal");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, userRoutes_1.UserRoutes],
        declarations: [defaultPage_1.DefaultPage, users_1.Users, formPreview_1.FormPreview, page_1.Page, formHorizontal_1.FormHorizontal,
            formInput_1.FormInput, formButton_1.FormButton, formButtonPrimary_1.FormButtonPrimary],
        bootstrap: [defaultPage_1.DefaultPage],
        providers: [userService_1.UserService],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map