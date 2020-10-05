import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Media } from 'src/app/model/media/media';
import { MediaDetailsDialogComponent } from '../media-details-dialog/media-details-dialog.component';
import { MediaDetailsComponent } from '../media-details/media-details.component';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent {

  @Input() media: Media;

  constructor(private matDialog: MatDialog) {
  }

  openDetails(event) {
    event.preventDefault();
    event.stopPropagation();
    this.matDialog.open(MediaDetailsDialogComponent, {
      data: {
        media: this.media,
      },
      width: '100%',
      panelClass: 'custom-dialog-container'
    });
  }
}
