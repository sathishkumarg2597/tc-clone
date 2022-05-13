import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "app-textfield",
    templateUrl: "./textfield.component.html",
    styleUrls: ["./textfield.component.scss"]
})
export class TextFieldComponent implements OnInit{
    @Input() fGroup: FormGroup
    @Input() label: string
    @Input() fCName: string
    @Input() type: string
    @Input() placeholder: string

    constructor(){ }

    ngOnInit(): void {
    }
}