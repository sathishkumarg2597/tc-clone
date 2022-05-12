import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";

//Mat Modules
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
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
    ]
})
export class SharedModule{}