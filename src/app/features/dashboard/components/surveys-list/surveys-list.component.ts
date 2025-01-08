import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Survey } from '../../../models/survey';
import { SurveyService } from '../../../services/survey.service';
import { SurveyItemComponent } from '../survey-item/survey-item.component';
import { AddSurveyComponent } from '../add-survey/add-survey.component';

@Component({
  selector: 'app-surveys-list',
  imports: [SurveyItemComponent , CommonModule, AddSurveyComponent],
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
