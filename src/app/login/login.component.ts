import { ThemeServiceService } from '../theme.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService:AuthService, private themeService: ThemeServiceService) { }

  ngOnInit() {
    // this.themeService.setColor()
  }

  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', Validators.minLength(6)],
  });

  async onSignIn(email: string, password: string) {
    await this.authService.signin(email, password)
    if(this.authService.isLoggedIn) {
    }
  }

  createUserViaGoogle() {
    this.authService.createUserViaGoogle();
  }

  createUserViaFacebook() {
    this.authService.FacebookAuth();
  }

  // onClickMoonLight() {
  //   this.themeService.setColorDark();
  //   document.getElementById('icon-light').style.display="none";
  //   document.getElementById('icon-dark').style.display="block";
  //   document.getElementById('icon-dark').style.cursor="pointer";
  // }

  // onClickMoonDark() {
  //   this.themeService.ngOnInit();
  //   document.getElementById('icon-dark').style.display="none";
  //   document.getElementById('icon-light').style.display="block";
  // }
}
