import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRegresarComponent } from './btn-regresar.component';

describe('BtnRegresarComponent', () => {
  let component: BtnRegresarComponent;
  let fixture: ComponentFixture<BtnRegresarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnRegresarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnRegresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
