import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanndComponent } from './quannd.component';

describe('QuanndComponent', () => {
  let component: QuanndComponent;
  let fixture: ComponentFixture<QuanndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
