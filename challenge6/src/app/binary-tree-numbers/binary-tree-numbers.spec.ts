import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryTreeNumbers } from './binary-tree-numbers';

describe('BinaryTreeNumbers', () => {
  let component: BinaryTreeNumbers;
  let fixture: ComponentFixture<BinaryTreeNumbers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryTreeNumbers],
    }).compileComponents();

    fixture = TestBed.createComponent(BinaryTreeNumbers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
