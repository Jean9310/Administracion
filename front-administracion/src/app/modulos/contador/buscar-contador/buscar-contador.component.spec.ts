import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarContadorComponent } from './buscar-contador.component';

describe('BuscarContadorComponent', () => {
  let component: BuscarContadorComponent;
  let fixture: ComponentFixture<BuscarContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarContadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
