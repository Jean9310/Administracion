import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAdministracionComponent } from './buscar-administracion.component';

describe('BuscarAdministracionComponent', () => {
  let component: BuscarAdministracionComponent;
  let fixture: ComponentFixture<BuscarAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
