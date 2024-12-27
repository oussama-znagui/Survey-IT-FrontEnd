import { Component } from '@angular/core';
import { SubjectsTreeComponent } from '../subjects-tree/subjects-tree.component';
import { QuestionsListComponent } from '../questions-list/questions-list.component';
import { ActivatedRoute } from '@angular/router';
import { EditionService } from '../../services/edition.service';
import { Edition } from '../../models/edition';
import { error } from 'console';

@Component({
  selector: 'app-edition-details',
  imports: [SubjectsTreeComponent,QuestionsListComponent],
  templateUrl: './edition-details.component.html',
  styleUrl: './edition-details.component.css'
})
export class EditionDetailsComponent {
  id!: number;
  edition!: Edition
  errorMessage: string | undefined;
  


constructor(private route: ActivatedRoute,private service: EditionService){

}

ngOnInit(): void {
  console.log("hellooo");

  this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.loadEdition(this.id);
  });
}

loadEdition(id: number): void {
  this.service.getEditionDate(id).subscribe({
    next: (data) => {
      this.edition = data;
    },
    error: (error) => {
      console.error('Error fetching edition:', error);
    }
  });
}

}
