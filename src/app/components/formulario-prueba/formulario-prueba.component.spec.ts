import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPruebaComponent } from './formulario-prueba.component';

describe('FormularioPruebaComponent', () => {
  let component: FormularioPruebaComponent;
  let fixture: ComponentFixture<FormularioPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
