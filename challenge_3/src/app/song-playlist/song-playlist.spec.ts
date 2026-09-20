import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPlaylist } from './song-playlist';

describe('SongPlaylist', () => {
  let component: SongPlaylist;
  let fixture: ComponentFixture<SongPlaylist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongPlaylist],
    }).compileComponents();

    fixture = TestBed.createComponent(SongPlaylist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
