import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatMenuTrigger } from '@angular/material/menu';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('menuTrigger', { static: false }) menuTrigger!: MatMenuTrigger;
  hideHeader: boolean = false;
  breakpointSubscription!: Subscription;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hideHeader = event.urlAfterRedirects === '/login' || event.urlAfterRedirects === '/register' || event.urlAfterRedirects === '/forgot-password';
      }
    });

    this.breakpointSubscription = this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe(result => {
        if (result.matches && this.menuTrigger?.menuOpen) {
          this.menuTrigger.closeMenu();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
