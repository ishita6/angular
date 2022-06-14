import { ComponentFixture, TestBed } from '@angular/core/testing';

import { scholarshipPageComponent } from './scholarshipPage.component';

describe('scholarshipPageComponent', () => {
  let component: scholarshipPageComponent;
  let fixture: ComponentFixture<scholarshipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ scholarshipPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(scholarshipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
