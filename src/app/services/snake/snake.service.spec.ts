/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SnakeService } from './snake.service';

describe('SnakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnakeService]
    });
  });

  it('should ...', inject([SnakeService], (service: SnakeService) => {
    expect(service).toBeTruthy();
  }));
});
