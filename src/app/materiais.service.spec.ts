import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MateriaisService } from './materiais.service';

describe('MateriaisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MateriaisService],
    });
  });

  it('should be created', () => {
    const service: MateriaisService = TestBed.get(MateriaisService);
    expect(service).toBeTruthy();
  });
});
