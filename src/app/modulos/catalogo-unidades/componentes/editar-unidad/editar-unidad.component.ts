import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoUnidad } from 'src/app/modelos/catalogo-unidad.interface';

@Component({
  selector: 'app-editar-unidad',
  templateUrl: './editar-unidad.component.html',
  styleUrls: ['./editar-unidad.component.scss']
})
export class EditarUnidadComponent implements OnInit {

  catUnidad!: CatalogoUnidad;
  ooad: any = [
    {
      label: 'Valor 1', value: 1
    },
    {
      label: 'Valor 2', value: 2
    },
    {
      label: 'Valor 3', value: 3
    }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.catUnidad = this.route.snapshot.data['catUnidad'];
  }

}
