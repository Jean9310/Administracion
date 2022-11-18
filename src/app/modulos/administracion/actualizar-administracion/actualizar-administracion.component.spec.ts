import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAdministracionComponent } from './actualizar-administracion.component';

describe('ActualizarAdministracionComponent', () => {
  let component: ActualizarAdministracionComponent;
  let fixture: ComponentFixture<ActualizarAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
