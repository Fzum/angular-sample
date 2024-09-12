import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  names = ['John', 'Jane', 'Doe'];

  getCurrentlyLoggedInUserName(): Observable<string> {
    const randomIndex = Math.floor(Math.random() * this.names.length);
    return of(this.names[randomIndex]);
  }
}
