import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/categoria/model/categoria';
import { CategoriaService } from 'src/app/categoria/service/categoria.service';
import { Marca } from 'src/app/marca/model/marca';
import { MarcaService } from 'src/app/marca/service/marca.service';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {

  produto: Produto = new Produto();
  categorias: Categoria[] = [];
  marcas: Marca[] = []

  constructor(private categoriaService: CategoriaService,
              private marcaService: MarcaService,
              private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoriaService.findAll().subscribe(e => this.categorias = e);
    this.marcaService.findAll().subscribe(e => this.marcas = e);
  }

  save(): void {
    this.produtoService.save(this.produto).subscribe(e => {
      this.router.navigate(['produto']);
    }, error => {
      //exibir mensagem de erro
    });
  }

  cancel(): void {
    this.router.navigate(['produto']);
  }
}
