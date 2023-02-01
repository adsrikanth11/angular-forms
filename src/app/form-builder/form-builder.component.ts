import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  // Two way Form-control
  two_way_formbuilder = this.fb.group({
    firstname: [''],
    lastname: [''],
    password: [''],
    email: [''],
    mobile: [''],
    dob: [''],
    gender: [''],
    languages: this.fb.group({
      Telugu: [''],
      Marathi: [''],
      Kannada: [''],
      Hindi: [''],
      English: [''],
    })
  });

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.two_way_formbuilder.value);
  }

  set_values() {
    this.two_way_formbuilder.setValue({
      firstname: 'Ambal Dhage',
      lastname: 'Srikanth',
      password: '123456',
      email: 'srikanth@gmail.com',
      mobile: '9876543210',
      dob: '2022-04-05',
      gender: 'male',
      languages: {
        Telugu: 'true',
        Marathi: 'false',
        Kannada: 'true',
        Hindi: 'false',
        English: 'true',
      }
    });
  }

  patch_values() {
    this.two_way_formbuilder.patchValue({
      firstname: 'Ambal Dhage',
      lastname: 'Srikanth',
      dob: '2022-04-05',
      gender: 'male',
      languages: {
        Telugu: 'true',
        Marathi: 'false',
        Kannada: 'true',
        Hindi: 'false',
        English: 'true',
      }
    });
  }

  reset_values() {
    this.two_way_formbuilder.reset();
  }

}
