/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GroundService } from './ground.service';

describe('GroundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroundService]
    });
  });

  it('should ...', inject([GroundService], (service: GroundService) => {
    expect(service).toBeTruthy();
  }));
});
