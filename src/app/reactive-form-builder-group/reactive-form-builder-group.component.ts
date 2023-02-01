import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder-group',
  templateUrl: './reactive-form-builder-group.component.html',
  styleUrls: ['./reactive-form-builder-group.component.css']
})
export class ReactiveFormBuilderGroupComponent implements OnInit {

  name = new FormControl('');
  username = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  profileform = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required)
  });

  profileformgroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
    })
  });

  onsubmit() {
    console.log(this.profileform.value);
    console.log(this.profileform.valid);
  }

  onsubmitgroup() {
    console.log(this.profileformgroup.value);
    console.log(this.profileformgroup.valid);
    let formobj = this.profileformgroup.getRawValue();
    let serialize = JSON.stringify(formobj);
    console.log(serialize);
  }

  setformgroup() {
    this.profileformgroup.setValue({
      firstname: 'Ambal Dhage',
      lastname: 'Srikanth',
      address: {
        city: 'Adoni',
        district: 'Kurnool',
        state: 'Andhra Pradesh'
      }
    })
  }

  patchformgroup() {
    this.profileformgroup.patchValue({
      firstname: 'Ambal Dhage',
      lastname: 'Srikanth',
      // address: {
      //   city: 'Adoni',
      //   district: 'Kurnool',
      //   state: 'Andhra Pradesh'
      // }
    })
  }

  resetformgroup() {
    this.profileformgroup.reset();
  }

  setname() {
    this.name.setValue('qwerty');
  }

  reset() {
    this.name.reset();
  }

  // --------------------- Form Builder ----------------------------------------------
  mynum = [
    {id: 1, name: 'One'},
    {id: 2, name: 'Two'},
    {id: 3, name: 'Three'},
  ];
  profileformbuildergroup = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    gender: ['', Validators.required],
    languages: this.fb.group({
      Telugu: [''],
      Marathi: ['']
    }),
    mynumber: ['', Validators.required],
    address: this.fb.group({
      city: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required]
    })
  });

  onsubmitbuild() {
    let val =  this.profileformbuildergroup.value;
    let obj = this.profileformbuildergroup.getRawValue();
    let jsonobj = JSON.stringify(obj);
    console.log(val);
    console.log(jsonobj);
  }

  setformbuildgroup() {
    this.profileformbuildergroup.setValue({
      firstname: 'Ambal Dhage',
      lastname: 'Srikanth',
      gender: 'female',
      languages: {
        Telugu: 'true',
        Marathi: 'true'
      },
      mynumber: 'Two',
      address: {
        city: 'SBI',
        district: 'Kurnool',
        state: 'Andhra Pradesh'
      }
    });
  }

  patchformbuildgroup() {
    this.profileformbuildergroup.patchValue({
      firstname: 'Ambal Dhage',
      lastname: 'Srikanth',
      gender: 'male',
      languages: {
        Telugu: 'true',
        Marathi: 'true'
      },
      mynumber: 'One'
      // address: {
      //   city: 'SBI',
      //   district: 'Kurnool',
      //   state: 'Andhra Pradesh'
      // }
    });
  }

  resetformbuildgroup() {
    this.profileformbuildergroup.reset();
  }

}
