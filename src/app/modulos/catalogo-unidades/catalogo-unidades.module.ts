import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoUnidadesRoutingModule } from './catalogo-unidades-routing.module';
import { CatalogoUnidadesComponent } from './componentes/catalogo-unidades/catalogo-unidades.component';
import { CardModule } from 'primeng-lts/card';


@NgModule({
  declarations: [
    CatalogoUnidadesComponent
  ],
  imports: [
    CommonModule,
    CatalogoUnidadesRoutingModule,
    CardModule
  ]
})
export class CatalogoUnidadesModule { }
