import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(
    private location: Location,
    public authService: AuthService

  ) { }
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {

  }

  isLoading = false;

  signIn(email: string, password: string) {
    this.isLoading = true;
    this.authService.SignIn(email, password)
      .finally(() => this.isLoading = false);
  }
}
