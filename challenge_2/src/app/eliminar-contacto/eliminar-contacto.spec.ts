import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarContacto } from './eliminar-contacto';

describe('EliminarContacto', () => {
  let component: EliminarContacto;
  let fixture: ComponentFixture<EliminarContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarContacto],
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarContacto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
