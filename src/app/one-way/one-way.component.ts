import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {

  constructor() { }

  // One - Way  With ngForm
	submitted: Boolean = false;
	fname: String = '';
	lname: String = '';
	password: String = '';
	email: String = '';
	mobile: String = '';
	gender: String = '';
	dob: String = '';
	Telugu: Boolean = false;
	Marathi: Boolean = false;
	Kannada: Boolean = false;
	Hindi: Boolean = false;
	English: Boolean = false;

	ngOnInit(): void {
	}

	one_way_forms(one_way_form: NgForm) {
		console.log(one_way_form.value);
		this.submitted = true;
	}

	set_value(one_way_form: NgForm) {
		one_way_form.setValue({
			fname: 'Ambal Dhage',
			lname: 'Srikanth',
			password: '123456',
			email: 'srikanth@gmail.com',
			mobile: '1234567890',
			gender: 'male',
			dob: '2022-05-04',
			Telugu: true,
			Marathi: true,
			Kannada: false,
			Hindi: false,
			English: true
		});
		this.submitted = false;
	}

	patch_value() {
		// alert('patch');
		this.fname = 'Ambal Dhage';
		this.lname = 'Srikanth';
		this.password = '123456';
		this.email = 'srikanth@gmail.com';
		this.mobile = '9876543210';
		this.gender = 'male';
		this.dob = '2022-04-05';
		// Telugu: Boolean = false;
		// Marathi: Boolean = false;
		// Kannada: Boolean = false;
		// Hindi: Boolean = false;
		// English: Boolean = false;
	}

	reset(one_way_form: NgForm) {
		one_way_form.reset();
		this.submitted = false;
	}

}
