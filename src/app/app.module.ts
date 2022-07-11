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
import { FooterheadComponent } from './footerhead/footerhead.component';
import { PamplateComponent } from './pamplate/pamplate.component';
import { TestComponent } from './test/test.component';
import { PhotosComponentComponent } from './photos-component/photos-component.component';
import { AppNavigateComponent } from './app-navigate/app-navigate.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FirstFooterComponent } from './first-footer/first-footer.component';
import { NewHomePageComponent } from './new-home-page/new-home-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { WeOfferComponent } from './we-offer/we-offer.component';
import { NewDashboard1Component } from './new-dashboard1/new-dashboard1.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AccadmicComponent } from './accadmic/accadmic.component';
import { BuildingLegandsComponent } from './building-legands/building-legands.component';

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
    LiveClassHeaderComponent,
    FooterheadComponent,
    PamplateComponent,
    TestComponent,
    PhotosComponentComponent,
    AppNavigateComponent,
    AboutusComponent,
    FirstFooterComponent,
    NewHomePageComponent,
    MyProfileComponent,
    WeOfferComponent,
    NewDashboard1Component,
    AccadmicComponent,
    BuildingLegandsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
