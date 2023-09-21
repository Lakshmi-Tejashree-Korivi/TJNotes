import { Component } from '@angular/core';
import { NOTES } from '../notes';
import { NgFor} from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent {
  notes = NOTES;

  show(title: string) {
    alert(title);
  }
}
