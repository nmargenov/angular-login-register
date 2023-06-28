import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestTokenService {
  private url = 'http://localhost:5000/api/';

  constructor(private http:HttpClient) { }

  testToken():Observable<object>{
    return this.http.get<object>(this.url+'testYourToken').pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.error.message || "Unknown error!");
  }
}
