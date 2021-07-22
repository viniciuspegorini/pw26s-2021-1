import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {
  
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute) {
    
  }

  ngOnInit() {
  }

}
