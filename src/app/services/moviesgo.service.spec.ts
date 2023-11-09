import { TestBed } from '@angular/core/testing';

import { MoviesgoService } from './moviesgo.service';

describe('MoviesgoService', () => {
  let service: MoviesgoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesgoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
