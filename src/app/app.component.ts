import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurveyDetailsComponent } from './features/dashboard/components/survey-details/survey-details.component';
import { SurveysListComponent } from './features/dashboard/components/surveys-list/surveys-list.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Survey-IT-FrontEnd';
}
