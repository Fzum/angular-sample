import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  names = ['John', 'Jane', 'Doe'];

  getCurrentlyLoggedInUserName(): string {
    const randomIndex = Math.floor(Math.random() * this.names.length);
    return this.names[randomIndex];
  }
}
