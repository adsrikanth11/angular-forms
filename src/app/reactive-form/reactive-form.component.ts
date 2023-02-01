import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myforms:any = UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  // FormGroup 
    // this.myforms = new FormGroup({
    //   'username': new FormControl('Srikanth'),
    //   'emailid': new FormControl('srikanth@gmail.com'),
    //   'password': new FormControl('mypassword')
    // });

  // FormBuilder
    this.myforms = this.fb.group({
      'username': new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'emailid': new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'password': new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });

  }

  onSubmit() {
    // Get specific element value
    console.log(this.myforms.get('username').value);
    // get all form values
    console.log(this.myforms.value);
    // Get All Forms data
    console.log(this.myforms);
  }

  setvalue() {
    const setvalues = {
      'username': 'Srikanth...',
      'emailid': 'srikanth@gmail.com...',
      'password': 'mypassword...'
    }

    this.myforms.setValue(setvalues);
  }

  patchvalue() {
    const patchvalues = {
      'username': 'Srikanth...',
      'emailid': 'srikanth@gmail.com...',
    }
    
    this.myforms.patchValue(patchvalues);
  }

  resetvalue() {
    this.myforms.reset();
  }

}
