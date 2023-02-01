import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  constructor() { }

  firstname: String = '';
  lastname: String = '';
  Fullname: String = '';

  ngOnInit(): void {
  }

  two_way_binding(firstname: String, lastname: String) {
    this.Fullname = firstname + ' ' + lastname;
    console.log(this.Fullname);
  }

}
