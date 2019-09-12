import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'form-select',
    styleUrls: ['form-select.component.scss'],
    templateUrl: './form-select.component.html'
})
export class FormSelectComponent implements Field {
    config: FieldConfig;
    group: FormGroup;
    submitted: boolean;
}
