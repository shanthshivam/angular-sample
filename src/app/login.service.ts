import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { User } from 'src/app/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
	private SERVER_URL = "http://localhost:8080/ashwin/api/login";
  private body = "";
   heads = new HttpHeaders().set('Content-Type', 'application/json');
	constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept' : 'text/plain;charset=UTF-8'
    })
  };

	// public post(){
  //   user:User{
  //     email = emailIn;
  //     name = nameIn;
  //   }
  //   this.body = JSON.stringify(user);
	// 	return this.httpClient.post(this.SERVER_URL, this.body);
	// }

    // POST
    post(data:any) {
      return this.httpClient
        .post(
          this.SERVER_URL,
          JSON.stringify(data),
          {headers:this.heads,responseType:'text'}
        )//.pipe(catchError(this.handleError));
    }

    handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      //window.alert(errorMessage);
      return throwError(errorMessage);
    }

}
