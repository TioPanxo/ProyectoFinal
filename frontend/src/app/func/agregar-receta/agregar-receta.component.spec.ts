import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRecetaComponent } from './agregar-receta.component';

describe('AgregarRecetaComponent', () => {
  let component: AgregarRecetaComponent;
  let fixture: ComponentFixture<AgregarRecetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarRecetaComponent]
    });
    fixture = TestBed.createComponent(AgregarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
