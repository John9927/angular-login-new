import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemeService } from '../theme';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService, private themeServices: ThemeService  ) { }

  ngOnInit() {}

  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', Validators.minLength(6)],
  });

  async onSignup(email: string, password: string) {
    await this.authService.signup(email, password)
    if (this.authService.isLoggedIn) {
    }
  }
}
