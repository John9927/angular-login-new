import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }

  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', Validators.minLength(6)],
  });

  onClickMoon() {
    console.log("Ciao")
  }
  async onSignIn(email: string, password: string) {
    await this.authService.signin(email, password)
    if(this.authService.isLoggedIn) {
    }
  }
}
