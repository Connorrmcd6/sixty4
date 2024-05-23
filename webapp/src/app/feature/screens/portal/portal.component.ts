import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent implements OnInit {

  companyName: string = "Sixty4"
  userInitials: string = "BR"
  notifications: Array<any> = []; // add notifications here

  constructor(public authService: AuthService) { }
  ngOnInit(): void { }
}

