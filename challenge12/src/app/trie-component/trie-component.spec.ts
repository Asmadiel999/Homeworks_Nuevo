import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrieComponent } from './trie-component';

describe('TrieComponent', () => {
  let component: TrieComponent;
  let fixture: ComponentFixture<TrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrieComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
