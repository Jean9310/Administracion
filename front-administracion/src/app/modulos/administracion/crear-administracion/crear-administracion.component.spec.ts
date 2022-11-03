import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAdministracionComponent } from './crear-administracion.component';

describe('CrearAdministracionComponent', () => {
  let component: CrearAdministracionComponent;
  let fixture: ComponentFixture<CrearAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
