import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should be called when add function called', () => {
    var result = service.add(1, 2);
    expect(result).toBe(3);
  });

  it('it should be called when substract function called', () => {
    var result = service.substract(5, 10);
    expect(result).toBe(5);
  });

});
