import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFormBuilderModule } from 'projects/form-builder/src/public-api';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxFormBuilderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
