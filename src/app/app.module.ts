import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatCheckboxModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { OwnersComponent } from './owners/owners.component';
import { CarsComponent } from './cars/cars.component';
import { LicensesComponent } from './licenses/licenses.component';
import { LicensesDashboardComponent } from './licenses/licenses-dashboard/licenses-dashboard.component';
import { CarsDashboardComponent } from './cars/cars-dashboard/cars-dashboard.component';
import { OwnersDashboardComponent } from './owners/owners-dashboard/owners-dashboard.component';
import { GenderTileComponent } from './owners/owners-dashboard/gender-tile/gender-tile.component';
import { AgeTileComponent } from './owners/owners-dashboard/age-tile/age-tile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';
import { FuelTypeTileComponent } from './cars/cars-dashboard/fuel-type-tile/fuel-type-tile.component';
import { ColorTileComponent } from './cars/cars-dashboard/color-tile/color-tile.component';
import { CarYearTileComponent } from './cars/cars-dashboard/car-year-tile/car-year-tile.component';




const appRoutes: Routes = [
  { path: 'owners', component: OwnersComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'licenses', component: LicensesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OwnersComponent,
    CarsComponent,
    LicensesComponent,
    LicensesDashboardComponent,
    CarsDashboardComponent,
    OwnersDashboardComponent,
    GenderTileComponent,
    AgeTileComponent,
    FuelTypeTileComponent,
    ColorTileComponent,
    CarYearTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
