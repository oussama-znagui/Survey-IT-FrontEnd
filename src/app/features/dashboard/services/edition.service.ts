import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Edition } from '../models/edition';

@Injectable({
  providedIn: 'root'
})
export class EditionService {
  private url = "http://localhost:8080/api/editions"
  

  constructor(private http: HttpClient) { }

  getEditionDate(id: number): Observable<Edition>{
    return this.http.get<{data: {edition: Edition}}>(`${this.url}/${id}`).pipe(map(response => response.data.edition));
  
  }
  
}
