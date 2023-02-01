import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-form',
  templateUrl: './form-group-form.component.html',
  styleUrls: ['./form-group-form.component.css']
})
export class FormGroupFormComponent implements OnInit {

  constructor() { }
	emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
	only_number = /^[0-9]*$/;

  	two_way_formgroup: any = FormGroup;

	ngOnInit(): void {
		this.two_way_formgroup = new FormGroup({
			firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
			lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)]),
			email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegEx)]),
			mobile: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
			dob: new FormControl('', Validators.required),
			gender: new FormControl('', Validators.required),
			languages: new FormGroup({
				Telugu: new FormControl(false),
				Marathi: new FormControl(false),
				Kannada: new FormControl(false),
				Hindi: new FormControl(false),
				English: new FormControl(false),
			})
		});
	}

	get f() {
		return this.two_way_formgroup.controls;
	}

	onSubmit() {
		console.log(this.two_way_formgroup);
	}

	set_values() {
		this.two_way_formgroup.setValue({
			firstname: 'Ambal Dhage',
			lastname: 'Srikanth',
			password: '123456',
			email: 'srikanth@gmail.com',
			mobile: '9876543210',
			dob: '2022-04-05',
			gender: 'male',
			languages: {
			Telugu: true,
			Marathi: false,
			Kannada: true,
			Hindi: false,
			English: true,
			}
		});
	}

	patch_values() {
		this.two_way_formgroup.patchValue({
			firstname: 'Ambal Dhage',
			lastname: 'Srikanth',
			dob: '2022-04-05',
			gender: 'male',
			languages: {
			Telugu: true,
			Marathi: false,
			Kannada: true,
			Hindi: false,
			English: true,
			}
		});
	}

	reset_values() {
		this.two_way_formgroup.reset();
	}

}
