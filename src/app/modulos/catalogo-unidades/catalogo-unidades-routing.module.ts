import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoUnidadesComponent } from './componentes/catalogo-unidades/catalogo-unidades.component';

const routes: Routes = [{ path: '', component: CatalogoUnidadesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoUnidadesRoutingModule { }
