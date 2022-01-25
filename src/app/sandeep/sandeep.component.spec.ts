import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandeepComponent } from './sandeep.component';

describe('SandeepComponent', () => {
  let component: SandeepComponent;
  let fixture: ComponentFixture<SandeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandeepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
