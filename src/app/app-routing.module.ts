import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CategoriesComponent } from './categories/categories.component';

import { FooteradminComponent } from './footeradmin/footeradmin.component';
import { HeaderadminComponent } from './headeradmin/headeradmin.component';
import { LocationsComponent } from './locations/locations.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'admin', component : AdminComponent },
  { path : 'categories', component : CategoriesComponent },

  { path : 'Footeradmin', component : FooteradminComponent },
  { path : 'Headeradmin', component : HeaderadminComponent },
  { path : 'locations', component : LocationsComponent },
  { path : 'reservations', component : ReservationsComponent },
  { path : 'sidebaradmin', component : SidebaradminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
