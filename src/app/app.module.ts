import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { OwnersComponent } from './owners/owners.component';
import { CarsComponent } from './cars/cars.component';
import { LicensesComponent } from './licenses/licenses.component';
import { LicensesDashboardComponent } from './licenses/licenses-dashboard/licenses-dashboard.component';
import { CarsDashboardComponent } from './cars/cars-dashboard/cars-dashboard.component';
import { OwnersDashboardComponent } from './owners/owners-dashboard/owners-dashboard.component';


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
    OwnersDashboardComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
