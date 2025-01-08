import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private apiUrl = 'http://localhost:8080/api/answers';


  constructor(private http: HttpClient) { }

  addAnswer(questionId: number, text: String): Observable<any>{
    console.log(questionId, "id du question")
    const paylod = {
      questionId,
      text
    }

    return this.http.post(this.apiUrl,paylod)
  }


}
