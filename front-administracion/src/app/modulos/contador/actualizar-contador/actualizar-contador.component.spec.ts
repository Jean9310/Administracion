import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarContadorComponent } from './actualizar-contador.component';

describe('ActualizarContadorComponent', () => {
  let component: ActualizarContadorComponent;
  let fixture: ComponentFixture<ActualizarContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarContadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
