import { Component } from '@angular/core';
import { SubjectsTreeComponent } from '../subjects-tree/subjects-tree.component';
import { QuestionsListComponent } from '../questions-list/questions-list.component';

@Component({
  selector: 'app-edition-details',
  imports: [SubjectsTreeComponent,QuestionsListComponent],
  templateUrl: './edition-details.component.html',
  styleUrl: './edition-details.component.css'
})
export class EditionDetailsComponent {

}
