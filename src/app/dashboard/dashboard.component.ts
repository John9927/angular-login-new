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

  constructor(private authService: AuthService) { }
  ngOnInit() {
  }

  logout() {
    this.authService.logout()
    this.isLogout.emit();
  }

}
