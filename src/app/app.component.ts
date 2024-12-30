import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authservice:AuthService){

  }
  ngOnInit(): void {
    this.subscription = this.authservice.currentMessage.subscribe(message =>
      this.sharedMessage = message
    );

  
    if(localStorage.getItem('isLogin')){
      this.authservice.changeMessage("true")
    }
  }
  title = 'authentication';

  sharedMessage: string ='false';
  subscription!:Subscription;
}


