import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter } from '../../../models/chapter';
import { QuestionItemComponent } from '../question-item/question-item.component';

@Component({
  selector: 'app-questions-list',
  imports: [CommonModule,QuestionItemComponent],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css'
})
export class QuestionsListComponent {
  @Input() chapter!: Chapter;
  @Input() chapterID?: number;
  @Output() questionSelected = new EventEmitter<any>();
  
  onQuestionSelect(question: any) {
    this.questionSelected.emit(question);
  }

 

}
