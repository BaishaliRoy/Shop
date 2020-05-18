import { NotFoundError } from './../common/NotFoundError';
import { AppError } from './../common/AppError';
import { UserServicesService } from './../services/user-services.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {
  private userList: any ;
  private newUser: any;
  foo: any;
  error:any;

  constructor(private service: UserServicesService) {}

  ngOnInit() {

    this.service.getUser()
    .subscribe(
      (response) => {
        this.userList  = response;
        console.log(this.userList);
      },
      /*(error) => {
        alert('An unexpected error while getting users');
        console.log(error);
      });*/
      (error) => {
        this.error = error;
      }
    );
  }
  addNewUser(input: HTMLInputElement ) {
    this.newUser = {name: input.value};
    input.value = '';
    this.service.postUser(this.newUser)
    .subscribe(
      (response) => {
        console.log(response);
        this.foo = response ;
        this.newUser.id = this.foo.id ;
        console.log(this.newUser);
        this.userList.splice(0 , 0, this.newUser);
        console.log(this.newUser);
      },
      (error) => {
        alert('An unexpected error while adding users');
        console.log(error);
      }
    );
  }

  updateUser(user) {
    this.service.putUser(user, user.id)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert('An unexpected error while updating users');
        console.log(error);
      }
    );
  }

  removeUser(user) {
    // this.service.deleteUser(user.id)
    this.service.deleteUser(200)
    .subscribe(
      (response) => {
        const index = this.userList.indexOf(user);
        console.log(response, index);
        this.userList.splice(index, 1) ;
      },
      /*(error: Response) => {
        if (error.status === 404) {
          alert (' User already deleted');
        }else{
          alert('An unexpected error while getting users');
        }
        // console.log(error);
      }*/
      // Applying Separation Of concerns by removing any code of HTTP
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert (' User already deleted');
        } else {
          alert('An unexpected error while getting users');
        }
      }
    );
  }

  makeError() {
    this.service.makeIntentionalError()
    .subscribe(null,
      (error: AppError) => {
        // this.error = error ;
          if (error instanceof NotFoundError) {
            console.log(error);
          } else {
            alert(error);
          }
      });
  }
}
