import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApDwComponent } from './ap-dw.component';

describe('ApDwComponent', () => {
  let component: ApDwComponent;
  let fixture: ComponentFixture<ApDwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApDwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApDwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
