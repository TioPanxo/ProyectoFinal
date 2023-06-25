import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioclimComponent } from './cambioclim.component';

describe('CambioclimComponent', () => {
  let component: CambioclimComponent;
  let fixture: ComponentFixture<CambioclimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambioclimComponent]
    });
    fixture = TestBed.createComponent(CambioclimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
