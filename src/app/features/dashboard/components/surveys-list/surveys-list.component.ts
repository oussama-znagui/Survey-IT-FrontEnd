import { Component, OnInit } from '@angular/core';
import { SurveyDetailsComponent } from '../survey-details/survey-details.component';
import { AddButtonComponent } from '../../../../shared/add-button/add-button.component';
import { Survey } from '../../models/survey';
import { SurveyService } from '../../services/survey.service';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-surveys-list',
  imports: [SurveyDetailsComponent,AddButtonComponent , CommonModule],
  templateUrl: './surveys-list.component.html',
  styleUrl: './surveys-list.component.css'
})
export class SurveysListComponent implements OnInit {
  surveys!: Survey[];

  constructor(private service: SurveyService){
    
  }

  ngOnInit(): void{
    console.log("bonjour")
    this.service.getSurveys().subscribe({
      next:(data) => {
        this.surveys = data
      },
      error:(error) => {
        console.log("aloooooooooooo")
        console.log(error );
        
      }
    })
  }
  


}
