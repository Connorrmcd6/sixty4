import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { DanScreenComponent } from './dan-screen/dan-screen.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingComponent,
    DanScreenComponent
  ],
  imports: [
    CommonModule, 
    MatButtonModule,
    RouterModule
  ]
})
export class ScreensModule { }
