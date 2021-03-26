import { ThemeServiceService } from './../theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private themeService: ThemeServiceService) { }

  ngOnInit() {
    this.themeService.setColor()
  }

  onClickMoonLight() {
    this.themeService.setColorDark();
    document.getElementById('icon-light').style.display="none";
    document.getElementById('icon-dark').style.display="block";
    document.getElementById('icon-dark').style.cursor="pointer";
  }

  onClickMoonDark() {
    this.themeService.ngOnInit();
    document.getElementById('icon-dark').style.display="none";
    document.getElementById('icon-light').style.display="block";
  }

}
