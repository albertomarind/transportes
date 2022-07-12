import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng-lts/card';
import {TableModule} from 'primeng-lts/table';

import { CatalogoUnidadesRoutingModule } from './catalogo-unidades-routing.module';
import { CatalogoUnidadesComponent } from './componentes/catalogo-unidades/catalogo-unidades.component';
import { SeparadorModule } from 'src/app/compartidos/separador/separador.module';


@NgModule({
  declarations: [
    CatalogoUnidadesComponent
  ],
  imports: [
    CommonModule,
    CatalogoUnidadesRoutingModule,
    CardModule,
    SeparadorModule,
    TableModule
  ]
})
export class CatalogoUnidadesModule { }
