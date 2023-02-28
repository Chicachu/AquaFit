import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedBannerComponent } from './get-started-banner.component';

describe('GetStartedBannerComponent', () => {
  let component: GetStartedBannerComponent;
  let fixture: ComponentFixture<GetStartedBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStartedBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStartedBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
