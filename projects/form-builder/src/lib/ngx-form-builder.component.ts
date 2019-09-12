import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { FieldConfig } from './models/field-config.interface';

@Component({
    exportAs: 'ngxFormBuilderComponent',
    // tslint:disable-next-line: component-selector
    selector: 'ngx-form-builder',
    templateUrl: './ngx-form-builder.component.html',
    styleUrls: ['./ngx-form-builder.component.scss']
})
export class NgxFormBuilderComponent implements OnChanges, OnInit {
    @Input() config: FieldConfig[] = [];

    @Output() submitEvent: EventEmitter<any> = new EventEmitter<any>();

    submitted = false;
    form: FormGroup;

    get controls() { return this.config.filter(({ type }) => type !== 'button'); }
    get changes() { return this.form.valueChanges; }
    get valid() { return this.form.valid; }
    get value() { return this.form.value; }

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.createGroup();
    }

    ngOnChanges() {
        if (this.form) {
            const controls = Object.keys(this.form.controls);
            const configControls = this.controls.map((item) => item.name);

            controls
                .filter((control) => !configControls.includes(control))
                .forEach((control) => this.form.removeControl(control));

            configControls
                .filter((control) => !controls.includes(control))
                .forEach((name) => {
                    const config = this.config.find((control) => control.name === name);
                    this.form.addControl(name, this.createControl(config));
                });

        }
    }

    createGroup() {
        const group = this.fb.group({});
        this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
        return group;
    }

    createControl(config: FieldConfig) {
        const { disabled, validation, value } = config;
        return this.fb.control({ disabled, value }, validation);
    }

    handleSubmit(event: Event) {
        this.submitted = true;
        console.log(this.form);
        const response = {
            data: this.value,
            state: this.form
        };
        this.submitEvent.emit(response);
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }


    setDisabled(name: string, disable: boolean) {
        if (this.form.controls[name]) {
            const method = disable ? 'disable' : 'enable';
            this.form.controls[name][method]();
            return;
        }

        this.config = this.config.map((item) => {
            if (item.name === name) {
                item.disabled = disable;
            }
            return item;
        });
    }

    setValue(name: string, value: any) {
        this.form.controls[name].setValue(value, { emitEvent: true });
    }

}
