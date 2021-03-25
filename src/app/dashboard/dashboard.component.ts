import { ThemeServiceService } from '../theme.service';
import { AuthService } from './../auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  moon: any;

  @Output() isLogout = new EventEmitter<void>()

  constructor(private authService: AuthService, private themeService: ThemeServiceService) { }
  ngOnInit() {
    this.themeService.setColor()
  }

  logout() {
    this.authService.logout()
    this.isLogout.emit();
  }

  onClickMoonLight() {
    this.themeService.setColorDark();
    this.moon = document.getElementById('icon-light').style.display="none";
    this.moon = document.getElementById('icon-dark').style.display="block";
    this.moon = document.getElementById('icon-dark').style.cursor="pointer";
  }

  onClickMoonDark() {
    this.themeService.ngOnInit();
    this.moon = document.getElementById('icon-dark').style.display="none";
    this.moon = document.getElementById('icon-light').style.display="block";
  }
}
