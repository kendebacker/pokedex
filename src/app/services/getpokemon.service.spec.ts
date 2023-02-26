import { TestBed } from '@angular/core/testing';

import { GetpokemonService } from './getpokemon.service';

describe('GetpokemonService', () => {
  let service: GetpokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
