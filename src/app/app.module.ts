import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HomeComponent } from './ui/home/home.component';
import { AboutUsComponent } from './ui/about-us/about-us.component';
import { ServicesComponent } from './ui/services/services.component';
import { DistributorsComponent } from './ui/distributors/distributors.component';
import { ClientsComponent } from './ui/clients/clients.component';
import { CareersComponent } from './ui/careers/careers.component';
import { CarouselComponent } from './ui/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    DistributorsComponent,
    ClientsComponent,
    CareersComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
