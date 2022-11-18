import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearContadorComponent } from './crear-contador.component';

describe('CrearContadorComponent', () => {
  let component: CrearContadorComponent;
  let fixture: ComponentFixture<CrearContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearContadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
