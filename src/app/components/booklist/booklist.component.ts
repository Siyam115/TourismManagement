import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  bList!: any[];
  constructor(private book_service: BookingService, private router: Router) {}
  ngOnInit(): void {
    this.book_service.getAll().subscribe((res: any) => {
      this.bList = res;
    });
  }
  delete(id: any) {
    this.book_service.delete(id).subscribe((res: any) => {
      this.ngOnInit();
    });
  }

}
 


