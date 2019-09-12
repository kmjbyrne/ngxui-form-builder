import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'form-button',
    styleUrls: ['form-button.component.scss'],
    templateUrl: 'form-button.component.html'
})
export class FormButtonComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
    submitted: boolean;
}
