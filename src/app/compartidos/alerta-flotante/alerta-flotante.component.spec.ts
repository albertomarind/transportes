import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaFlotanteComponent } from './alerta-flotante.component';

describe('AlertaFlotanteComponent', () => {
  let component: AlertaFlotanteComponent;
  let fixture: ComponentFixture<AlertaFlotanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaFlotanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaFlotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
