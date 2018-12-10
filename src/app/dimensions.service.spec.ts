import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DimensionsService } from './dimensions.service';

describe('DimensionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DimensionsService],
    });
  });

  it('should be created', () => {
    const service: DimensionsService = TestBed.get(DimensionsService);
    expect(service).toBeTruthy();
  });
});
