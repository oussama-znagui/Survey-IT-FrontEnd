import { Routes } from '@angular/router';
import { SurveysListComponent } from './features/dashboard/components/surveys-list/surveys-list.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { MainPageComponent } from './features/dashboard/main-page/main-page.component';


export const routes: Routes = [
    {path:'' , component:MainPageComponent},
    {path: 'surveys-list', component: SurveysListComponent}
];
