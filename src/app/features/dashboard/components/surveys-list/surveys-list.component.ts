import { Component } from '@angular/core';
import { SurveyDetailsComponent } from '../survey-details/survey-details.component';
import { AddButtonComponent } from '../../../../shared/add-button/add-button.component';

@Component({
  selector: 'app-surveys-list',
  imports: [SurveyDetailsComponent,AddButtonComponent],
  templateUrl: './surveys-list.component.html',
  styleUrl: './surveys-list.component.css'
})
export class SurveysListComponent {

}
