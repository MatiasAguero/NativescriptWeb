import { TestBed } from '@angular/core/testing';

import { NewlogService } from './newlog.service';

describe('NewlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewlogService = TestBed.get(NewlogService);
    expect(service).toBeTruthy();
  });
});
