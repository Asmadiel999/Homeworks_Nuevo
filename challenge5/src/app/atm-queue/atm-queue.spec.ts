import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmQueue } from './atm-queue';

describe('AtmQueue', () => {
  let component: AtmQueue;
  let fixture: ComponentFixture<AtmQueue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtmQueue],
    }).compileComponents();

    fixture = TestBed.createComponent(AtmQueue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
