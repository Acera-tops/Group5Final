import { TestBed } from '@angular/core/testing';

import { TasteDiveService } from './taste-dive.service';

describe('TasteDiveService', () => {
  let service: TasteDiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasteDiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
