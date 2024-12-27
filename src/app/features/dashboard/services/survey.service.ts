import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../models/survey';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private url = 'http://localhost:8080/api/api/surveys';


  constructor(private http:HttpClient) { }

  getSurveys(): Observable<Survey[]>{
    return this.http.get<{ status: number; message: string; data: { surveys: Survey[] } }>(this.url).pipe(map(response => response.data.surveys));
  }
}
