import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarConjuntoComponent } from './eliminar-conjunto.component';

describe('EliminarConjuntoComponent', () => {
  let component: EliminarConjuntoComponent;
  let fixture: ComponentFixture<EliminarConjuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarConjuntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarConjuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
