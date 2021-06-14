import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSidenavComponent } from './item-sidenav.component';

describe('SidenavAssociadoComponent', () => {
  let component: ItemSidenavComponent;
  let fixture: ComponentFixture<ItemSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
