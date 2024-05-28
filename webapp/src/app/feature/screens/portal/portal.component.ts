import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { QuoteComponent } from '../../dialogs/quote/quote.component';
import { MatDialog } from '@angular/material/dialog';
import { ClientComponent } from '../../dialogs/client/client.component';
import { JobComponent } from '../../dialogs/job/job.component';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent {
  constructor(
    public authService: AuthService,
    public matDialog: MatDialog,
  ) { }


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

  openQuoteDialog() {
    this.matDialog.open(QuoteComponent, {
      width: '350px'
    })
  }

  openClientDialog() {
    this.matDialog.open(ClientComponent, {
      width: '350px'
    })
  }

  openJobDialog() {
    this.matDialog.open(JobComponent, {
      width: '350px'
    })
  }


  ngOnInit(): void { }
}

