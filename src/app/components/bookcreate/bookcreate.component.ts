import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-bookcreate',
  templateUrl: './bookcreate.component.html',
  styleUrls: ['./bookcreate.component.scss']
})
export class BookcreateComponent  implements OnInit {

constructor(private book_service: BookingService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  bookingForm: FormGroup = new FormGroup({
    bName: new FormControl(),
    bBDate: new FormControl(),
    bSdate:new FormControl(),
    bDestination: new FormControl(),
    bCost: new FormControl(),
    bDiscount: new FormControl(),
    bStatus: new FormControl(),
    bPaymetod: new FormControl(),
    
  });

  save() {
    this.book_service.add(this.bookingForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/booklist');
    });
  }





}



