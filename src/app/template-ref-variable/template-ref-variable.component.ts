import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-variable',
  templateUrl: './template-ref-variable.component.html',
  styleUrls: ['./template-ref-variable.component.css']
})
export class TemplateRefVariableComponent implements OnInit {

  // One-way
    // Template Ref Variable #inputname
    fname: String = '';
    lname: String = '';
    fullname: String = '';

    firstname: String = '';
    lastname: String = '';
    Fullname: String = '';

  ngOnInit(): void {
  }

  one_way_temp(fname: any, lname: any) {
    this.fullname = fname.value + ' ' + lname.value;
    console.log(fname);
    console.log(fname.value);
  }

}
