import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasApp } from './tareas-app';

describe('TareasApp', () => {
  let component: TareasApp;
  let fixture: ComponentFixture<TareasApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasApp],
    }).compileComponents();

    fixture = TestBed.createComponent(TareasApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
