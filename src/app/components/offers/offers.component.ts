import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
constructor( private router: Router) {}
navigateToBookCreate() {
  this.router.navigate(['/allpack']);
  
}

navigateToBookCreate1() {
  this.router.navigate(['/bookcreate']);
  
}
}
