import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jobComponent } from './job.component';

describe('jobComponent', () => {
  let component: jobComponent;
  let fixture: ComponentFixture<jobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ jobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(jobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
