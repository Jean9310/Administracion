import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTransaccionComponent } from './buscar-transaccion.component';

describe('BuscarTransaccionComponent', () => {
  let component: BuscarTransaccionComponent;
  let fixture: ComponentFixture<BuscarTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarTransaccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
