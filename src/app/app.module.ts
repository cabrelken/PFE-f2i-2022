import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';

import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LocationsComponent } from './locations/locations.component';

import { ReservationsComponent } from './reservations/reservations.component';

import { CategoriesComponent } from './categories/categories.component';
import { HeaderadminComponent } from './headeradmin/headeradmin.component';
import { FooteradminComponent } from './footeradmin/footeradmin.component';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    LocationsComponent,
    
    ReservationsComponent,

    CategoriesComponent,
    HeaderadminComponent,
    FooteradminComponent,
    SidebaradminComponent,
    CustomersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
