import { TestBed } from '@angular/core/testing';

import { FyleService } from './fyle.service';

describe('FyleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FyleService = TestBed.get(FyleService);
    expect(service).toBeTruthy();
  });
});
