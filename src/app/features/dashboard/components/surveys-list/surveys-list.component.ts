import { Component } from '@angular/core';
import { SurveyDetailsComponent } from '../survey-details/survey-details.component';

@Component({
  selector: 'app-surveys-list',
  imports: [SurveyDetailsComponent],
  templateUrl: './surveys-list.component.html',
  styleUrl: './surveys-list.component.css'
})
export class SurveysListComponent {

}
