import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaadminComponent } from './areaadmin.component';

describe('AreaadminComponent', () => {
  let component: AreaadminComponent;
  let fixture: ComponentFixture<AreaadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaadminComponent]
    });
    fixture = TestBed.createComponent(AreaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
