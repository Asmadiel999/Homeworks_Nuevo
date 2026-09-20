import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirContacto } from './anadir-contacto';

describe('AnadirContacto', () => {
  let component: AnadirContacto;
  let fixture: ComponentFixture<AnadirContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnadirContacto],
    }).compileComponents();

    fixture = TestBed.createComponent(AnadirContacto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
