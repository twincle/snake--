/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DirectionService } from './direction.service';

describe('DirectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectionService]
    });
  });

  it('should ...', inject([DirectionService], (service: DirectionService) => {
    expect(service).toBeTruthy();
  }));
});
