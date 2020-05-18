import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form-reactive',
  templateUrl: './contact-form-reactive.component.html',
  styleUrls: ['./contact-form-reactive.component.css']
})
export class ContactFormReactiveComponent implements OnInit {

  constructor() { }
  courses = [1, 2] ;
  switchVar = 'FootBall';

  listItems = [ 'Basics', 'Interview', 'Project'];
  customerDetails = {
    Name : {
      First : 'John',
      Middle : null,
      Last :   'Smith'
    },
    Address : null,
  };


  addItem = () => this.listItems.push('PRACTICE');
  removeItem = (item) => {
    const index = this.listItems.indexOf(item);
    this.listItems.splice(index, 1);
  }
  updateItem = (pos) => this.listItems[pos] = 'MODIFIED';

  ngOnInit() {
  }
}
