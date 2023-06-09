import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciosesComponent } from './inicioses.component';

describe('IniciosesComponent', () => {
  let component: IniciosesComponent;
  let fixture: ComponentFixture<IniciosesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniciosesComponent]
    });
    fixture = TestBed.createComponent(IniciosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
