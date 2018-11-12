import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarYearTileComponent } from './car-year-tile.component';

describe('CarYearTileComponent', () => {
  let component: CarYearTileComponent;
  let fixture: ComponentFixture<CarYearTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarYearTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarYearTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
