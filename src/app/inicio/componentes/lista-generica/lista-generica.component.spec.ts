import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGenericaComponent } from './lista-generica.component';

describe('ListaGenericaComponent', () => {
  let component: ListaGenericaComponent;
  let fixture: ComponentFixture<ListaGenericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaGenericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
