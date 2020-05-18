import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingly';
  isState = false;

  onChange(){
    this.isState = !this.isState;
    console.log("change emitted");
  }
}
