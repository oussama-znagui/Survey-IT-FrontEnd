import { Routes } from '@angular/router';
import { MainPageComponent } from './features/dashboard/components/main-page/main-page.component';
import { SurveysListComponent } from './features/dashboard/components/surveys-list/surveys-list.component';
import { EditionDetailsComponent } from './features/dashboard/components/edition-details/edition-details.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ParticipationComponent } from './features/participation/participation.component';

export const routes: Routes = [


        { 
            path: 'dashboard', 
            component: DashboardComponent, 
            children: [
              { path: '', component: MainPageComponent },
              { path: 'surveys-list', component: SurveysListComponent },
              { path: 'edition/:id', component: EditionDetailsComponent },
            ]
          },
          { path: 'participation/:id', component: ParticipationComponent },

];
