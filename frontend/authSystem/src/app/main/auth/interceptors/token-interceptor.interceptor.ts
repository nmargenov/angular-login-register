import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { TOKEN } from 'src/app/shared/config';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(TOKEN);

    if (req.url.includes('api') && token !== null) {
      req = req.clone({
        headers: req.headers.set('X-Authorization', 'Bearer ' + token)
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 409) {
          localStorage.removeItem(TOKEN);
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
