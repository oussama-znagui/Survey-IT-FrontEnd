import { Component } from '@angular/core';

@Component({
  selector: 'app-participation-card',
  imports: [],
  templateUrl: './participation-card.component.html',
  styleUrl: './participation-card.component.css'
})
export class ParticipationCardComponent {

  onAnswerSelect(questionId: number, answerId: number) {
   
    console.log(`Selected answer ${answerId} for question ${questionId}`);
  }

}
