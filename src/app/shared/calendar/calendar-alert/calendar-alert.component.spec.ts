import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarAlertComponent } from './calendar-alert.component';

describe('CalendarAlertComponent', () => {
  let component: CalendarAlertComponent;
  let fixture: ComponentFixture<CalendarAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
