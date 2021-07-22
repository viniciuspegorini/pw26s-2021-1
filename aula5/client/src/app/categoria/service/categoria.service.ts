import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  constructor(private httpClient: HttpClient) { }

  private getUrl(): string {
    return environment.api + '/categoria'
  }

  findAll(): Observable<Categoria[]> {
    const url = `${this.getUrl()}`;
    return this.httpClient.get<Categoria[]>(url);
  }

  save(categoria: Categoria): Observable<Categoria> {
    const url = `${this.getUrl()}`;
    return this.httpClient.post<Categoria>(url, JSON.stringify(categoria), httpOptions);
  } 

  findOne(id: number): Observable<Categoria> {
    const url = `${this.getUrl()}/${id}`;
    return this.httpClient.get<Categoria>(url);
  }

  delete(id: number): Observable<void>  {
    const url = `${this.getUrl()}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
