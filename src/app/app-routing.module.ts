import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormControlFormComponent } from './form-control-form/form-control-form.component';
import { FormGroupFormComponent } from './form-group-form/form-group-form.component';
import { HomeComponent } from './home/home.component';
import { OneWayComponent } from './one-way/one-way.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormBuilderGroupComponent } from './reactive-form-builder-group/reactive-form-builder-group.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateRefVariableComponent } from './template-ref-variable/template-ref-variable.component';
import { TwoWayComponent } from './two-way/two-way.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'template-ref-variable', component: TemplateRefVariableComponent },
  { path: 'one-way-form', component: OneWayComponent },
  { path: 'two-way-form', component: TwoWayComponent },
  { path: 'form-control-form', component: FormControlFormComponent },
  { path: 'form-group-form', component: FormGroupFormComponent },
  { path: 'form-builder-form', component: FormBuilderComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'reactive-form-builder-group', component: ReactiveFormBuilderGroupComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
