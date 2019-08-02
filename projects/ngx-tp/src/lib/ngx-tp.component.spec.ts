import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTpComponent } from './ngx-tp.component';

describe('NgxTpComponent', () => {
  let component: NgxTpComponent;
  let fixture: ComponentFixture<NgxTpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
