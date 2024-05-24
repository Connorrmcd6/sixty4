import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent implements OnInit {

  getUserInitials(): string {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const { userName, userSurname } = JSON.parse(userInfo);
      this.userInitials = `${userName[0]}${userSurname[0]}`;
    }
    return this.userInitials;
  }

  companyName: string = "Sixty4"
  userInitials: string = this.getUserInitials();
  notifications: Array<any> = ["Connor has requested a review", "Ryan approved QUO00102"]; // add notifications here

  constructor(public authService: AuthService) { }
  ngOnInit(): void { }
}

