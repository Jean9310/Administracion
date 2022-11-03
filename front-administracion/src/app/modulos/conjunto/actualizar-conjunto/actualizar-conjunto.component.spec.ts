import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarConjuntoComponent } from './actualizar-conjunto.component';

describe('ActualizarConjuntoComponent', () => {
  let component: ActualizarConjuntoComponent;
  let fixture: ComponentFixture<ActualizarConjuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarConjuntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarConjuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
