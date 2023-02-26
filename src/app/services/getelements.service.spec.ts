import { TestBed } from '@angular/core/testing';

import { GetelementsService } from './getelements.service';

describe('GetelementsService', () => {
  let service: GetelementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetelementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
