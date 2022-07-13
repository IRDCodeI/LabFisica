import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindservicesComponent } from './findservices.component';

describe('FindservicesComponent', () => {
  let component: FindservicesComponent;
  let fixture: ComponentFixture<FindservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
