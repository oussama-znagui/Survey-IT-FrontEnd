import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ParticipationComponent } from './features/participation/participation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DashboardComponent,ParticipationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Survey-IT-FrontEnd-CSR';
}
