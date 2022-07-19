import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDComponent } from './booking-d.component';

describe('BookingDComponent', () => {
  let component: BookingDComponent;
  let fixture: ComponentFixture<BookingDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
