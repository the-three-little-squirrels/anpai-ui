import { TestBed } from '@angular/core/testing';

import { NgxTpService } from './ngx-tp.service';

describe('NgxTpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTpService = TestBed.get(NgxTpService);
    expect(service).toBeTruthy();
  });
});
