import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentacionComponent } from './alimentacion.component';

describe('AlimentacionComponent', () => {
  let component: AlimentacionComponent;
  let fixture: ComponentFixture<AlimentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimentacionComponent]
    });
    fixture = TestBed.createComponent(AlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
