import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaUnidadComponent } from './componentes/alta-unidad/alta-unidad.component';
import { CatalogoUnidadesComponent } from './componentes/catalogo-unidades/catalogo-unidades.component';
import { DetalleUnidadComponent } from './componentes/detalle-unidad/detalle-unidad.component';
import { EditarUnidadComponent } from './componentes/editar-unidad/editar-unidad.component';

const routes: Routes = [
  { path: '', component: CatalogoUnidadesComponent },
  { path: 'alta-de-unidad', component: AltaUnidadComponent },
  { path: 'editar-unidad/:idUnidad', component: EditarUnidadComponent },
  { path: 'detalle-de-unidad/:idUnidad', component: DetalleUnidadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoUnidadesRoutingModule { }
