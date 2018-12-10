import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EncomendaService } from './encomenda.service';

describe('EncomendaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EncomendaService],
    });
  });

  it('should be created', () => {
    const service: EncomendaService = TestBed.get(EncomendaService);
    expect(service).toBeTruthy();
  });
});
