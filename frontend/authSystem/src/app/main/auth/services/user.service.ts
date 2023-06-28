import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, catchError, throwError } from 'rxjs';
import { TOKEN } from 'src/app/shared/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router,private http:HttpClient) { }

  private url = 'http://localhost:5000/api/';

  get isLoggedIn() {
    return !!localStorage.getItem(TOKEN);
  }

  get decodedToken(){
    const token = localStorage.getItem(TOKEN);
    if(token!==null){
      const decodedToken: any = jwtDecode(token);
      return decodedToken;
    }
    return null;
  }

  login(username:string,password:string):Observable<string>{
    return this.http.post<string>(this.url+'users/login',{username,password}).pipe(catchError(this.errorHandler));
  }

  register(username:string,password:string,rePassword:string,email:string,age:number,firstName:string,lastName:string):Observable<string>{
    return this.http.post<string>(this.url+'users/register',{username,password,rePassword,email,age,firstName,lastName}).pipe(catchError(this.errorHandler));
  }

  logout(){
    localStorage.removeItem(TOKEN);
    return this.router.navigate(['/']);
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.error.message || "Unknown error!");
  }
}
