import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceconfigComponent } from './serviceconfig.component';

describe('ServiceconfigComponent', () => {
  let component: ServiceconfigComponent;
  let fixture: ComponentFixture<ServiceconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceconfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
