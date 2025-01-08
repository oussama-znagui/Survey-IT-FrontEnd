import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../../../models/question';
import { AnswerService } from '../../../services/answer.service';

@Component({
  selector: 'app-add-response',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-response.component.html',
  styleUrl: './add-response.component.css'
})
export class AddResponseComponent {
  @Input() question!: Question;
  newAnswer = { text: '' }; 
  isLoading = false;
 
constructor(private service: AnswerService){

}

  addAnswer(){
    
    console.log("add answer")
    console.log('Valeur de newAnswer.text:', this.newAnswer.text);
    if (!this.newAnswer.text.trim()) {
      alert('Le texte de la réponse ne peut pas être vide.');
      return;
    }
    this.isLoading = true;
    console.log('Ajout de la réponse en cours...');
    this.service.addAnswer(this.question.id,this.newAnswer.text).subscribe({
      next:(response) => {
        console.log("reponse ajoutee", response)
        this.question.answers.push({
          id: response.id, 
          text: this.newAnswer.text,
          selectionCount: 0, 
          
        })
        this.newAnswer.text = '';
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de la réponse', err);
        alert('Une erreur est survenue. Veuillez réessayer.');
      },
      complete: () => {
        this.isLoading = false;
      },
    })
   
   
  }

}
