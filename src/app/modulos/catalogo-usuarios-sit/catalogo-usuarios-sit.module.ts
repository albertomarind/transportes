import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoUsuariosSitRoutingModule } from './catalogo-usuarios-sit-routing.module';
import { CatalogoUsuariosSitComponent } from './componentes/catalogo-usuarios-sit/catalogo-usuarios-sit.component';


@NgModule({
  declarations: [
    CatalogoUsuariosSitComponent
  ],
  imports: [
    CommonModule,
    CatalogoUsuariosSitRoutingModule,
  ]
})
export class CatalogoUsuariosSitModule { }
