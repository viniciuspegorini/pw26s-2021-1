import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/generic/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends CrudService<Categoria, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/categoria', http);
  }
  

}
