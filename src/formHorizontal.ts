import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:"form-horizontal",
    templateUrl: "src/formHorizontal.html"
})

export class FormHorizontal{
    @Input() firstName:string;
    @Output() firstNameChange:EventEmitter<string>=  new EventEmitter();

    public onFirstNameChange(){
        this.firstNameChange.emit(this.firstName);
    }
}