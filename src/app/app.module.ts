import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'primeng-lts/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { HeaderImssPublicoComponent } from './componentes/header-imss-publico/header-imss-publico.component';
import { AlertasFlotantesService } from './servicios/alertas-flotantes.service';
import { MessageService } from 'primeng-lts/api';
import { AlertaFlotanteModule } from './compartidos/alerta-flotante/alerta-flotante.module';


@NgModule({
  declarations: [
    AppComponent,
    PaginaNoEncontradaComponent,
    HeaderImssPublicoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule,
    AlertaFlotanteModule
  ],
  providers: [
    MessageService,
    AlertasFlotantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
