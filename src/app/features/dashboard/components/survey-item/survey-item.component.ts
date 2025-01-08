import { Component, Input } from '@angular/core';
import { Survey } from '../../../models/survey';
import { EditionsListComponent } from '../editions-list/editions-list.component';

@Component({
  selector: 'app-survey-item',
  imports: [EditionsListComponent],
  templateUrl: './survey-item.component.html',
  styleUrl: './survey-item.component.css'
})
export class SurveyItemComponent {
  @Input() survey!: Survey;
}
