import { NotFoundError } from './../common/NotFoundError';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppError } from '../common/AppError';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUser() {
    return  this.http.get(this.userUrl)
    .pipe(
     // retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  postUser(user: any) {
    return this.http.post(this.userUrl, JSON.stringify(user))
    .pipe(
      // retry(3), // retry a failed request up to 3 times
       catchError(this.handleError) // then handle the error
     );
  }

  putUser(user, id) {
    return this.http.put(this.userUrl + '/' + id , JSON.stringify(user))
    .pipe(
      // retry(3), // retry a failed request up to 3 times
       catchError(this.handleError) // then handle the error
     );
  }

  deleteUser(id) {
    return this.http.delete(this.userUrl + '/' + id )
    .pipe(
      // retry(3), // retry a failed request up to 3 times
      // catchError(this.handleError) // then handle the error
      catchError((error) => {
        if (error.status === 404) {
          return throwError(new NotFoundError(error));
        }
        return throwError(new AppError(error));
      })
     );
  }

  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError((error) => {
          if (error.status === 404) {
            return throwError(new NotFoundError(error));
          }
          return throwError(new AppError(error));
        })
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
