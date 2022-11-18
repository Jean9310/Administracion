import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarInmuebleComponent } from './actualizar-inmueble.component';

describe('ActualizarInmuebleComponent', () => {
  let component: ActualizarInmuebleComponent;
  let fixture: ComponentFixture<ActualizarInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
