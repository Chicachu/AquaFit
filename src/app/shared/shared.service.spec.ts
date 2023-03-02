import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('ServiceService', () => {
  let service: SharedService
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate email', () => {
    const result = service.validateEmail("correctEmail@gmail.com")
    expect (result).toBeTruthy()
  });

  it ('should invalidate bad email', () => {
    const result = service.validateEmail("this-is_a_b$d@email")
    expect (result).toBeFalsy()
  })
});
