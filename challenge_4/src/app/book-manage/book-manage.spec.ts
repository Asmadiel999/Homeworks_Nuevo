import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookManage } from './book-manage';

describe('BookManage', () => {
  let component: BookManage;
  let fixture: ComponentFixture<BookManage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookManage],
    }).compileComponents();

    fixture = TestBed.createComponent(BookManage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
