import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginservice: LoginService, private router: Router,private authService: AuthService) { }

  loginForm: FormGroup = new FormGroup({
    
    lusername: new FormControl('s'),
    lpass: new FormControl('s'),
    lremember: new FormControl(),
  })
  userList: any[] = [];
  onSubmit() {
    console.log('Login works!');
    this.loginservice.getAll().subscribe((res: any) => {
      this.userList = res;

      let flag = false;

      for (let i = 0; i < this.userList.length; i++) {

        if (this.loginForm.value.lusername == this.userList[i].susername &&
          this.loginForm.value.lpass == this.userList[i].spass) {
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("username", this.userList[i].susername);
          localStorage.setItem("role", this.userList[i].srole);

          flag = true;

        }
      }

      if (flag == true) {
        this.authService.changeMessage("true")
        this.router.navigateByUrl('/home');
      } else {
        alert("Incorrect username or password!")
      }
    });
  }

}
