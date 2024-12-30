import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    // localStorage.setItem("isLogin", "true");
    //       localStorage.setItem("username", this.userList[i].susername);
    //       localStorage.setItem("role", "employee");
    this.isLogin = localStorage.getItem('isLogin') == 'true'
    this.username = localStorage.getItem('username') || ''
    this.role = localStorage.getItem('role') || ''
  }
  isLogin = false;
  username: string = '';
  role: string = '';

  activeLink: string = '/home'; // Default active link

  constructor(private router: Router) { }

  setActiveLink(link: string) {
    this.activeLink = link;
    if ('/log-in' == link) {
      if (this.isLogin) {
        // localStorage.setItem("isLogin", "true");
        //       localStorage.setItem("username", this.userList[i].susername);
        //       localStorage.setItem("role", "employee");
        localStorage.clear()
        this.router.navigateByUrl('/home')
        this.activeLink = '/home';
        setTimeout(() => {
          window.location.reload()
        }, 200);
      } else {
        this.router.navigateByUrl(link)
      }
    }
  }

  navigateToBookCreate() {
    this.router.navigate(['/login']);
  }



}
