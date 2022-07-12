import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoUsuariosSitRoutingModule } from './catalogo-usuarios-sit-routing.module';
import { CatalogoUsuariosSitComponent } from './componentes/catalogo-usuarios-sit/catalogo-usuarios-sit.component';
import { SeparadorModule } from 'src/app/compartidos/separador/separador.module';


@NgModule({
  declarations: [
    CatalogoUsuariosSitComponent
  ],
  imports: [
    CommonModule,
    CatalogoUsuariosSitRoutingModule,
    SeparadorModule
  ]
})
export class CatalogoUsuariosSitModule { }
