/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RuntimeService } from './runtime.service';

describe('RuntimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuntimeService]
    });
  });

  it('should ...', inject([RuntimeService], (service: RuntimeService) => {
    expect(service).toBeTruthy();
  }));
});
