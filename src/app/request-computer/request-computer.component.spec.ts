import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComputerComponent } from './request-computer.component';

describe('RequestComputerComponent', () => {
  let component: RequestComputerComponent;
  let fixture: ComponentFixture<RequestComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestComputerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
