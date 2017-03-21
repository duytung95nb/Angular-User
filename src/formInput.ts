import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "form-input",
    templateUrl: "src/formInput.html"
})

export class FormInput {
    @Input() value: string;
    @Output() valueChange: EventEmitter<string> = new EventEmitter();
    
    public onValueChanged() {
        this.valueChange.emit(this.value);
    }
}