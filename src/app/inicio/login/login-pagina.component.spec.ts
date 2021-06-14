import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {LoginHoteleiroComponent} from '../../hoteleiro/login-hoteleiro/login-hoteleiro.component';


describe('LoginHoteleiroComponent', () => {
  let component: LoginHoteleiroComponent;
  let fixture: ComponentFixture<LoginHoteleiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginHoteleiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHoteleiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
