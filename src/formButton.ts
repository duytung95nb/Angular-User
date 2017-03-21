import {Component, Input} from "@angular/core";

@Component({
    selector: "form-button",
    templateUrl: "src/formButton.html"
})
export class FormButton{
    @Input() cls:string;
    @Input() label:string;
}