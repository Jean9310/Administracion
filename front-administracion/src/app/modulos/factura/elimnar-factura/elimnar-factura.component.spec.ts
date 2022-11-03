import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimnarFacturaComponent } from './elimnar-factura.component';

describe('ElimnarFacturaComponent', () => {
  let component: ElimnarFacturaComponent;
  let fixture: ComponentFixture<ElimnarFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimnarFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElimnarFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
