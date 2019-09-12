# NgxUiFormBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Usage

### Module Imports

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFormBuilderModule } from 'ngxui-form-builder/public-api';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxFormBuilderModule // HERE
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

### Imports & Declarations

```typescript
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { NgxFormBuilderComponent } from 'ngxui-form-builder/public-api';
import { FieldConfig } from 'ngxui-form-builder/public-api';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChild(NgxFormBuilderComponent, { static: false }) form: NgxFormBuilderComponent;
    
    title = 'NgxUi Form Builder Demo';
    submitted = false; // Set here to pass to children in order to effectively show validation errors
    
    ...
    // Config here see below
    ...
    
    ngAfterViewInit() {
        // Seems to be a bit of an issue with the digest cycle here (used to called that in AngularJS)
        setTimeout(() => {
            this.form.setValue('name', 'Some dynamic value');
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
    
```

### Define Config

```typescript
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
```

### Template Usage

```html
<div class="container" style="text-align:center">
    <h1>
        Welcome to {{ title }}!
    </h1>
    <h2>Example: </h2>
    <ngx-form-builder [config]="config" #form="ngxFormBuilderComponent" (submitEvent)="submit($event)">
    </ngx-form-builder>
</div>
```
  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
