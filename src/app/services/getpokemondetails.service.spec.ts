import { TestBed } from '@angular/core/testing';

import { GetpokemondetailsService } from './getpokemondetails.service';

describe('GetpokemondetailsService', () => {
  let service: GetpokemondetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpokemondetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
