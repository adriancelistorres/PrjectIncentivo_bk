import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIncentivosComponent } from './login-incentivos.component';

describe('LoginIncentivosComponent', () => {
  let component: LoginIncentivosComponent;
  let fixture: ComponentFixture<LoginIncentivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginIncentivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginIncentivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
