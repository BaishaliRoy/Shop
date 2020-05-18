import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  name = "Baishali";
  @Input() state ;
  @Output() change = new EventEmitter() ;

  onClick() {
    console.log(this.state);
    this.state = !this.state;
  }

  onKeyUp(){
    this.change.emit();
  }

}
