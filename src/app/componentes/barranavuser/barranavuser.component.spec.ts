import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarranavuserComponent } from './barranavuser.component';

describe('BarranavuserComponent', () => {
  let component: BarranavuserComponent;
  let fixture: ComponentFixture<BarranavuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarranavuserComponent]
    });
    fixture = TestBed.createComponent(BarranavuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
