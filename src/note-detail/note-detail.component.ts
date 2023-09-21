import { Component, inject } from '@angular/core';
import { NOTES } from '../notes';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);
  router = inject(Router);
  delete(){
    if(this.note){
      let remove = NOTES.indexOf(this.note, 0);
      NOTES.splice(remove, 1);
    }
    this.router.navigateByUrl('/');
  }
 

}
