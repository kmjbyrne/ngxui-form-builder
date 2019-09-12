import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { NgxFormBuilderComponent } from 'projects/form-builder/src/public-api';
import { FieldConfig } from 'projects/form-builder/src/lib/models/field-config.interface';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'Ngx Form Builder Demo';
    @ViewChild(NgxFormBuilderComponent, { static: false }) form: NgxFormBuilderComponent;
    submitted = false;
    code = `
    config: FieldConfig[] = [
        {
            type: 'input',
            label: 'Name',
            name: 'name',
            placeholder: 'Enter your name',
            validation: [Validators.required, Validators.minLength(4)]
        },
        {
            type: 'select',
            label: 'Colours',
            name: 'colours',
            placeholder: 'Select an option',
            options: ['Blue', 'Green', 'Yellow', 'Black'],
            validation: [Validators.required]
        },
        {
            type: 'input',
            label: 'Mood',
            name: 'mood',
            placeholder: 'Enter your mood',
            validation: [Validators.required]
        },
        {
            type: 'button',
            label: 'Enter Details',
            name: 'submit',
            // placeholder: 'Enter your mood',
            //validation: [Validators.required]
        }
    ];`;

    config: FieldConfig[] = [
        {
            type: 'input',
            label: 'Name',
            name: 'name',
            placeholder: 'Enter your name',
            validation: [Validators.required, Validators.minLength(4)]
        },
        {
            type: 'select',
            label: 'Colours',
            name: 'colours',
            placeholder: 'Select an option',
            options: ['Blue', 'Green', 'Yellow', 'Black'],
            validation: [Validators.required]
        },
        {
            type: 'input',
            label: 'Mood',
            name: 'mood',
            placeholder: 'Enter your mood',
            validation: [Validators.required]
        },
        {
            type: 'button',
            label: 'Enter Details',
            name: 'submit',
            // placeholder: 'Enter your mood',
            //validation: [Validators.required]
        }
    ];

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            let previousValid = this.form.valid;
            this.form.changes.subscribe(() => {
                if (this.form.valid !== previousValid) {
                    previousValid = this.form.valid;
                    // this.form.setDisabled('submit', !previousValid);
                }
            });

            // this.form.setDisabled('submit', false);
            // this.form.setValue('testA', 'Testtesttest');
        }, 1000);
    }

    submit(value: { [name: string]: any }) {
        this.submitted = true;

        console.log(value);

        if (!(value.state.valid)) {
            value.state.errors = true;
        }
    }

}
