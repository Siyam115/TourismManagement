import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private messageSource = new BehaviorSubject('false');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message:string){this.messageSource.next(message)}



  constructor() { }
}
