import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallerecetaComponent } from './detallereceta.component';

describe('DetallerecetaComponent', () => {
  let component: DetallerecetaComponent;
  let fixture: ComponentFixture<DetallerecetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallerecetaComponent]
    });
    fixture = TestBed.createComponent(DetallerecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
