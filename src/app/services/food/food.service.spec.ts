/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodService } from './food.service';

describe('FoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodService]
    });
  });

  it('should ...', inject([FoodService], (service: FoodService) => {
    expect(service).toBeTruthy();
  }));
});
