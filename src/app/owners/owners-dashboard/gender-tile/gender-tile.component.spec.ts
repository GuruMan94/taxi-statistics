import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderTileComponent } from './gender-tile.component';

describe('GenderTileComponent', () => {
  let component: GenderTileComponent;
  let fixture: ComponentFixture<GenderTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
