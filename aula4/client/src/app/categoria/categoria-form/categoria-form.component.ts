import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  categoria = new Categoria();
  constructor(private categoriaService: CategoriaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    this.categoriaService.save(this.categoria).subscribe(e => {
      this.router.navigate(['categoria']);
    }, error => {
      //exibir mensagem de erro
    });
  }

  cancel(): void {

  }
}
