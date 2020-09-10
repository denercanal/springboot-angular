import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private baseUrl = "http://localhost:8080/api/v1/cursos";
  constructor(private http: HttpClient) { }

  getCurso(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCurso(curso: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, curso);
  }

  updateCurso(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCurso(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCursosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
