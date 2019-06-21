import { TestBed } from '@angular/core/testing';

import { ApDwService } from './ap-dw.service';

describe('ApDwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApDwService = TestBed.get(ApDwService);
    expect(service).toBeTruthy();
  });
});
