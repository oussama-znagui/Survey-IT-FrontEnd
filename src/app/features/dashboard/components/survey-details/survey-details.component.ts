import { Component, Input } from '@angular/core';
import { Survey } from '../../models/survey';
import { EditionsListComponent } from '../editions-list/editions-list.component';

@Component({
  selector: 'app-survey-details',
  imports: [EditionsListComponent],
  templateUrl: './survey-details.component.html',
  styleUrl: './survey-details.component.css'
})
export class SurveyDetailsComponent {
  @Input() survey!: Survey;

}
