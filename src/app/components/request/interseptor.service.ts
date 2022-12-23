import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Interseptor implements HttpInterceptor {
  public user: any;
  public name: any;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.user = user;
      this.name = JSON.stringify(this.user.name);
    }
    // {params: req.params.set('request', `Currentuser - ${this.name}`)}
    const request = req.clone();
    return next.handle(request);
  }
}
