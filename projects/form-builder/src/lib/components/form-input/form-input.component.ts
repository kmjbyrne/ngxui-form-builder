import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'form-input',
    styleUrls: ['form-input.component.scss'],
    templateUrl: './form-input.component.html'
})
export class FormInputComponent implements OnInit, Field {
    config: FieldConfig;
    group: FormGroup;
    submitted: boolean;

    ngOnInit() {
        console.log(this.config);
        console.log(this.group);
        console.log(this.submitted);
    }

    valid(formGroup) {
        // this.group.updateValueAndValidity();
        // this.group.markAsTouched();
    }
}
