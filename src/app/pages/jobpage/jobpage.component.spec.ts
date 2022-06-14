import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jobpageComponent } from './jobpage.component';

describe('jobpageComponent', () => {
  let component: jobpageComponent;
  let fixture: ComponentFixture<jobpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ jobpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(jobpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
