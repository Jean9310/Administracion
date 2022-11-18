import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAdministracionComponent } from './eliminar-administracion.component';

describe('EliminarAdministracionComponent', () => {
  let component: EliminarAdministracionComponent;
  let fixture: ComponentFixture<EliminarAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
