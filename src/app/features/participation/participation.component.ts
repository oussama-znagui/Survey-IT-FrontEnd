import { Component, Input } from '@angular/core';
import { Edition } from '../models/edition';
import { SubjectsViewComponent } from './components/subjects-view/subjects-view.component';
import { ParticipationCardComponent } from './components/participation-card/participation-card.component';
import { EditionService } from '../services/edition.service';

@Component({
  selector: 'app-participation',
  imports: [SubjectsViewComponent,ParticipationCardComponent],
  templateUrl: './participation.component.html',
  styleUrl: './participation.component.css'
})
export class ParticipationComponent {

   edition!: Edition;
  id!: number;
  
  errorMessage: string | undefined;
 


  a: number = 0;

  constructor(private service: EditionService){

  }

  ngOnInit(){
    console.log("participation")
    this.loadEdition(1)
  }

 

  

  loadEdition(id: number): void {
    this.service.getEditionDate(1).subscribe({
      next: (data) => {
        this.edition = data;
      },
      error: (error) => {
        console.error('Error fetching edition:', error);
      }
    });
  }



  
}
