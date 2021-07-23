import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/generic/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends CrudService<Produto, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/produto', http);
  }

}
