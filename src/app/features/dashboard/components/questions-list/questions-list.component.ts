import { Component } from '@angular/core';
import { QuestionItemComponent } from '../question-item/question-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions-list',
  imports: [QuestionItemComponent,CommonModule],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css'
})
export class QuestionsListComponent {

}
