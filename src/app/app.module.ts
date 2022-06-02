import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyLiveClassComponent } from './my-live-class/my-live-class.component';
import { DisConVedioComponent } from './dis-con-vedio/dis-con-vedio.component';
import { BuildingLegendsComponent } from './building-legends/building-legends.component';
import { PersonalCoachingComponent } from './personal-coaching/personal-coaching.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginsingnupComponent } from './loginsingnup/loginsingnup.component';
import { LandingDashboardComponent } from './landing-dashboard/landing-dashboard.component';
import { LiveClassComponent } from './live-class/live-class.component';
import { LiveClassHeaderComponent } from './live-class-header/live-class-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    LandingComponent,
    DashboardComponent,
    MyLiveClassComponent,
    DisConVedioComponent,
    BuildingLegendsComponent,
    PersonalCoachingComponent,
    ProfileComponent,
    LoginsingnupComponent,
    LandingDashboardComponent,
    LiveClassComponent,
    LiveClassHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
