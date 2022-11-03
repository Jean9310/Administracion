import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarZonaSocialComponent } from './buscar-zona-social.component';

describe('BuscarZonaSocialComponent', () => {
  let component: BuscarZonaSocialComponent;
  let fixture: ComponentFixture<BuscarZonaSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarZonaSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarZonaSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
