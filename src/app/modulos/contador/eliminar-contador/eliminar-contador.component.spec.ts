import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarContadorComponent } from './eliminar-contador.component';

describe('EliminarContadorComponent', () => {
  let component: EliminarContadorComponent;
  let fixture: ComponentFixture<EliminarContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarContadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
