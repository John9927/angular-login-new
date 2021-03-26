import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  createUserViaGoogle() {
    this.authService.createUserViaGoogle();
  }

  createUserViaFacebook() {
    this.authService.FacebookAuth();
  }

}
