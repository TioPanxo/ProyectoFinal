import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreauserComponent } from './areauser.component';

describe('AreauserComponent', () => {
  let component: AreauserComponent;
  let fixture: ComponentFixture<AreauserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreauserComponent]
    });
    fixture = TestBed.createComponent(AreauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
