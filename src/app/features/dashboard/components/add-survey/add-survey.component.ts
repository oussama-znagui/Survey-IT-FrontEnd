import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-survey',
  imports: [],
  templateUrl: './add-survey.component.html',
  styleUrl: './add-survey.component.css'
})
export class AddSurveyComponent {

  addSurvey(event: Event){
    event.preventDefault(); 
    console.log("form ca marche")
  }


}
