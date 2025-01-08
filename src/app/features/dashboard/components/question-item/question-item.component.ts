import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../../models/question';

@Component({
  selector: 'tr[app-question-item]',
  imports: [],
  templateUrl: './question-item.component.html',
  styleUrl: './question-item.component.css'
})
export class QuestionItemComponent {
  @Input() question!: Question;
  @Output() delete = new EventEmitter<number>();

  @Output() selectedQuesion = new EventEmitter<Question>();



  edit(): void {
    console.log('Editing question:', this.question);
  }

  remove(): void {
    this.delete.emit(this.question.id);
    
  }

  questionClickFn(){
    console.log("khdama")
    this.selectedQuesion.emit(this.question)
  }

}
