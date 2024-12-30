import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {
  constructor(private r: Router) { }
  ngOnInit(): void {
    this.role = localStorage.getItem('role')
    if (this.role != "employee") {
      this.r.navigateByUrl('/log-in')
    }

  }
  role: any = null
  currentTab = "overview"

}
