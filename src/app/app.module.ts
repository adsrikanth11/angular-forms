import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { TemplateRefVariableComponent } from './template-ref-variable/template-ref-variable.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormControlFormComponent } from './form-control-form/form-control-form.component';
import { FormGroupFormComponent } from './form-group-form/form-group-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    PagenotfoundComponent,
    HomeComponent,
    TemplateRefVariableComponent,
    OneWayComponent,
    TwoWayComponent,
    FormControlFormComponent,
    FormGroupFormComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
