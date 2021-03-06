import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'media-details-dialog',
  templateUrl: './media-details-dialog.component.html',
  styleUrls: ['./media-details-dialog.component.scss']
})
export class MediaDetailsDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public matDialogData: any, private dialogRef: MatDialogRef<MediaDetailsDialogComponent>) {
  }

  onClose() {
    this.dialogRef.close();
  }
}
