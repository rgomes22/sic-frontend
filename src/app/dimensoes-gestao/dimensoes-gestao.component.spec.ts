import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensoesGestaoComponent } from './dimensoes-gestao.component';

describe('DimensoesGestaoComponent', () => {
  let component: DimensoesGestaoComponent;
  let fixture: ComponentFixture<DimensoesGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensoesGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensoesGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
