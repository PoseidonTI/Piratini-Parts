import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdsComponent } from './hds.component';

describe('BoletosComponent', () => {
  let component: HdsComponent;
  let fixture: ComponentFixture<HdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
