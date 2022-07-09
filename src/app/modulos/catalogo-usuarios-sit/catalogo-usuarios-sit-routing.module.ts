import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoUsuariosSitComponent } from './componentes/catalogo-usuarios-sit/catalogo-usuarios-sit.component';

const routes: Routes = [{ path: '', component: CatalogoUsuariosSitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoUsuariosSitRoutingModule { }
