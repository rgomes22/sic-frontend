import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoGestaoComponent } from './produto-gestao.component';
import { ProdutosService } from '../produtos.service';

describe('ProdutoGestaoComponent', () => {
  let component: ProdutoGestaoComponent;
  let fixture: ComponentFixture<ProdutoGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoGestaoComponent ],
      providers: [{provide: ProdutosService, useClass: MockProdutoGestaoService}]
    });
    component = TestBed.get(ProdutoGestaoComponent);


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  
});

class MockProdutoGestaoService{

}
