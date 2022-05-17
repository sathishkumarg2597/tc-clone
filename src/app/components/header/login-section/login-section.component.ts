import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-login-section",
    templateUrl: "./login-section.component.html",
    styleUrls: ["./login-section.component.scss"],
})
export class LoginSectionComponent{
    @Output() closeLoginNav = new EventEmitter<void>();

    constructor(){ }

    closeNav(){
        this.closeLoginNav.emit();
    }
}   