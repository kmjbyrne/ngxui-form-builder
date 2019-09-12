import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DynamicElementDirective } from './components/dynamic-element/dynamic-element.directive';
import { NgxFormBuilderComponent } from './ngx-form-builder.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        DynamicElementDirective,
        NgxFormBuilderComponent,
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent
    ],
    exports: [
        NgxFormBuilderComponent
    ],
    entryComponents: [
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NgxFormBuilderModule { }
