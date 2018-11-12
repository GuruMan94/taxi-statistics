import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeTileComponent } from './age-tile.component';

describe('AgeTileComponent', () => {
  let component: AgeTileComponent;
  let fixture: ComponentFixture<AgeTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
