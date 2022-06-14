import { ComponentFixture, TestBed } from '@angular/core/testing';

import { scholarshipComponent } from './scholarship.component';

describe('scholarshipComponent', () => {
  let component: scholarshipComponent;
  let fixture: ComponentFixture<scholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ scholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(scholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
