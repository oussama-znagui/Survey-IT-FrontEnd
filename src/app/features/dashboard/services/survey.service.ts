import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private url = 'http://localhost:8080/api/survey';


  constructor(private http:HttpClient) { }

  getSurveys(): Observable<Survey[]>{
    return this.http.get<Survey[]>(this.url);
  }
}
