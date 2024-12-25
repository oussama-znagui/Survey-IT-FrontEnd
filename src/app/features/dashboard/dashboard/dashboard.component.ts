import { Component } from '@angular/core';
import { DashboardNavbarComponent } from '../../../shared/dashboard-navbar/dashboard-navbar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardNavbarComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}
