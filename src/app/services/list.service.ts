import { Injectable } from '@angular/core';
import { Animal } from '../class/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = "http://localhost:3000/animals";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`); 
  }

  gravar(animal: Animal) {
    return this.http.post<Animal>(this.apiUrl, animal);
  }

  atualizar(animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(`${this.apiUrl}/${animal.id}`, animal);
  }

}
