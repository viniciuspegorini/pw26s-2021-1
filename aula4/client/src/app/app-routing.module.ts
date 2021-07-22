import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';

/*import { HomeComponent } from './home/home.component';

*/

const routes: Routes = [
    { path: 'categoria', component: CategoriaListComponent },
    { path: 'categoria/new', component: CategoriaFormComponent },
    { path: 'categoria/:id', component: CategoriaFormComponent },
    { path: 'produto', component: ProdutoListComponent},
    { path: 'produto/new', component: ProdutoFormComponent},
    { path: 'produto/:id', component: ProdutoFormComponent}
    /*
    { path: '', redirectTo: 'home' , pathMatch: 'full' },
    { path: 'home', component: HomeComponent },    
    */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }