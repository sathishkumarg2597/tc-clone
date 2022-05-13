import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

//Mat Modules
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { TextFieldComponent } from "../components/textfield/textfield.component";
import { ErrorPipe } from "../pipes/error.pipe";

@NgModule({
    declarations:[
        TextFieldComponent,
        ErrorPipe,
    ],
    imports:[
        BrowserModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        CommonModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        ReactiveFormsModule,
    ],
    exports:[
        MatIconModule,
        MatSidenavModule,
        NoopAnimationsModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        ReactiveFormsModule,
        TextFieldComponent,
        ErrorPipe,
    ]
})
export class SharedModule{}