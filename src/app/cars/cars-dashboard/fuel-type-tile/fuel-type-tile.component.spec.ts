import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelTypeTileComponent } from './fuel-type-tile.component';

describe('FuelTypeTileComponent', () => {
  let component: FuelTypeTileComponent;
  let fixture: ComponentFixture<FuelTypeTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelTypeTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelTypeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
