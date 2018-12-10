import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestricaoEditComponent } from './restricao-edit.component';

describe('RestricaoEditComponent', () => {
  let component: RestricaoEditComponent;
  let fixture: ComponentFixture<RestricaoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestricaoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestricaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
