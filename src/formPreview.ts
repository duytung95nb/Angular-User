import {Component,Input,Output,EventEmitter} from "@angular/core";

@Component({
    selector:"form-preview",
    templateUrl:"src/formPreview.html"
})
export class FormPreview{
    @Input() firstName:string;
    @Output() firstNameChange:EventEmitter<string> = new EventEmitter();

    public onValueChange(){
        this.firstNameChange.emit(this.firstName);
    }
}