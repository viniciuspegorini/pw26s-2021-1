import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Marca } from '../model/marca';
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
export class MarcaService {
  
  constructor(private httpClient: HttpClient) { }

  private getUrl(): string {
    return environment.api + '/marca'
  }

  findAll(): Observable<Marca[]> {
    const url = `${this.getUrl()}`;
    return this.httpClient.get<Marca[]>(url);
  }

  save(marca: Marca): Observable<Marca> {
    const url = `${this.getUrl()}`;
    return this.httpClient.post<Marca>(url, JSON.stringify(marca), httpOptions);
  } 

  findOne(id: number): Observable<Marca> {
    const url = `${this.getUrl()}/${id}`;
    return this.httpClient.get<Marca>(url);
  }

  delete(id: number): Observable<void>  {
    const url = `${this.getUrl()}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}