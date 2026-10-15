import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolNarioMenu } from './arbol-nario-menu';

describe('ArbolNarioMenu', () => {
  let component: ArbolNarioMenu;
  let fixture: ComponentFixture<ArbolNarioMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbolNarioMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(ArbolNarioMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
