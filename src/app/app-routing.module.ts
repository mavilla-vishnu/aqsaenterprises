import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { AboutUsComponent } from './ui/about-us/about-us.component';
import { ServicesComponent } from './ui/services/services.component';
import { DistributorsComponent } from './ui/distributors/distributors.component';
import { ClientsComponent } from './ui/clients/clients.component';
import { CareersComponent } from './ui/careers/careers.component';
import { HomeComponentNew } from './types/home/home.component';
import { IndustryComponent } from './types/industry/industry.component';
import { HotelComponent } from './types/hotel/hotel.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'homedomestic', component: HomeComponentNew, pathMatch: 'full' },
  { path: 'hotel', component: HotelComponent, pathMatch: 'full' },
  { path: 'industry', component: IndustryComponent, pathMatch: 'full' },
  { path: 'about', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'services', component: ServicesComponent, pathMatch: 'full' },
  { path: 'distributors', component: DistributorsComponent, pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent, pathMatch: 'full' },
  { path: 'careers', component: CareersComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
