import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TaglineComponent } from './home/tagline/tagline.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { PendingTableComponent } from './portal/pending-table/pending-table.component';
import { HistoryTableComponent } from './portal/history-table/history-table.component';
import { JobTableComponent } from './portal/job-table/job-table.component';
import { ClientTableComponent } from './portal/client-table/client-table.component';

import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { PortalComponent } from './portal/portal.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TaglineComponent,
    PortalComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    CarouselComponent,
    PendingTableComponent,
    HistoryTableComponent,
    JobTableComponent,
    ClientTableComponent,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatChipsModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule
  ]
})
export class ScreensModule { }
