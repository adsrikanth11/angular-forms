import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-form',
  templateUrl: './form-control-form.component.html',
  styleUrls: ['./form-control-form.component.css']
})
export class FormControlFormComponent implements OnInit {

  constructor() { }

  // Reactive Form-control
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  mobile = new FormControl('', Validators.required);
  dob = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  Telugu = new FormControl('', Validators.required);
  Marathi = new FormControl('', Validators.required);
  Kannada = new FormControl('', Validators.required);
  Hindi = new FormControl('', Validators.required);
  English = new FormControl('', Validators.required); 


  ngOnInit(): void {

  }

  two_way_formcontrol() {
    console.log(this.firstname.value);
    console.log(this.firstname);
  }

  set_values() {
    this.firstname.setValue('Ambal Dhage');
    this.lastname.setValue('Srikanth');
    this.password.setValue('123456');
    this.email.setValue('srikanth@gmail.com');
    this.mobile.setValue('9876543210');
    this.dob.setValue('2022-04-05');
    this.gender.setValue('male');
    this.Telugu.setValue('true');
    this.Marathi.setValue('false');
    this.Kannada.setValue('true');
    this.Hindi.setValue('false');
    this.English.setValue('true');
  }

  patch_values() {
    this.firstname.setValue('Ambal Dhage');
    this.lastname.setValue('Srikanth');
    this.password.setValue('123456');
    this.email.setValue('srikanth@gmail.com');
    this.mobile.setValue('9876543210');
    this.dob.setValue('2022-04-05');
    this.gender.setValue('male');
  }

  reset_values() {
    this.firstname.reset();
    this.lastname.reset();
    this.password.reset();
    this.email.reset();
    this.mobile.reset();
    this.dob.reset();
    this.gender.reset();
    this.Telugu.reset();
    this.Marathi.reset();
    this.Kannada.reset();
    this.Hindi.reset();
    this.English.reset();
  }

}
