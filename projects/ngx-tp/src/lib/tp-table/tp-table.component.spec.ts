import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpTableComponent } from './tp-table.component';

describe('TpTableComponent', () => {
  let component: TpTableComponent;
  let fixture: ComponentFixture<TpTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
