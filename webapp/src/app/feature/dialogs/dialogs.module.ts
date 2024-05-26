import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';


import { ClientComponent } from './client/client.component';
import { JobComponent } from './job/job.component';
import { QuoteComponent } from './quote/quote.component';



@NgModule({
  declarations: [
    ClientComponent,
    JobComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatStepperModule
  ]
})
export class DialogsModule { }
