import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  constructor(public dialogRef: MatDialogRef<QuoteComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
