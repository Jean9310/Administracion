import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSeccionComponent } from './buscar-seccion.component';

describe('BuscarSeccionComponent', () => {
  let component: BuscarSeccionComponent;
  let fixture: ComponentFixture<BuscarSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarSeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
