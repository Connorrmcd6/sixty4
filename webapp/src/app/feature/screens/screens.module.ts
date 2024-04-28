import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class ScreensModule { }
