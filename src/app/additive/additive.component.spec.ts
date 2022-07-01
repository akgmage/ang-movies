import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditiveComponent } from './additive.component';

describe('AdditiveComponent', () => {
  let component: AdditiveComponent;
  let fixture: ComponentFixture<AdditiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
