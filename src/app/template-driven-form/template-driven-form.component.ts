import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  username: string = '';
  emailid: string = '';
  password: string = '';
  gender: boolean = true;
  Hyderabad: boolean = false;
  Bangalore: boolean = false;
  Chennai: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  add(formvalue: NgForm) {
    console.log(formvalue.value);
    console.log(formvalue);
  }

  resetform(templateform: NgForm) {
    templateform.reset();
  }

  set_value(templateform: NgForm) {
    let userdetail = {
      username: 'Srikanth',
      emailid: 'srikanth@gmail.com',
      password: 'mypassword',
      gender: 'male',
      cities: {
        Hyderabad: true,
        Bangalore: true,
        Chennai: false
      }
    }
    templateform.setValue(userdetail);
  }

  patch_value() {
    this.username = 'Srikanth';
    this.emailid = 'srikanth@gmail.com';
    this.password = 'mypassword';
  }

}
