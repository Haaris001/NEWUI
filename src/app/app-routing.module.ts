import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppNavigateComponent } from './app-navigate/app-navigate.component';
import { BuildingLegendsComponent } from './building-legends/building-legends.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisConVedioComponent } from './dis-con-vedio/dis-con-vedio.component';
import { FirstFooterComponent } from './first-footer/first-footer.component';
import { FooterComponent } from './footer/footer.component';
import { FooterheadComponent } from './footerhead/footerhead.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingDashboardComponent } from './landing-dashboard/landing-dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LiveClassHeaderComponent } from './live-class-header/live-class-header.component';
import { LiveClassComponent } from './live-class/live-class.component';
import { LoginsingnupComponent } from './loginsingnup/loginsingnup.component';
import { MyLiveClassComponent } from './my-live-class/my-live-class.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NewDashboard1Component } from './new-dashboard1/new-dashboard1.component';
import { NewHomePageComponent } from './new-home-page/new-home-page.component';
import { PamplateComponent } from './pamplate/pamplate.component';
import { PersonalCoachingComponent } from './personal-coaching/personal-coaching.component';
import { PhotosComponentComponent } from './photos-component/photos-component.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';
import { WeOfferComponent } from './we-offer/we-offer.component';

const routes: Routes = [ {
  path: "",
  component: HomePageComponent, 
},
{
  path: "footer",
  component:FooterComponent,

},
{
  path:"landing",
  component:LandingComponent,
},
{
  path:"dashBoard",
  component:DashboardComponent
},
{
  path:"building",
  component:BuildingLegendsComponent
},
{
  path:"disc",
  component:DisConVedioComponent
},{
  path:"liveclass",
  component:MyLiveClassComponent
},
{
  path:"personalCoaching",
  component:PersonalCoachingComponent
},
{
  path:"login",
  component:LoginsingnupComponent
},
{
  path:"profile",
  component:ProfileComponent
},
{
  path:"landingDash",
  component:LandingDashboardComponent
},
{
  path:"LCheadder",
  component:LiveClassHeaderComponent

},
{
  path:"live",
  component:LiveClassComponent
},
{
  path:"foothead",
  component:FooterheadComponent
},
{
  path:"pamplate",
  component:PamplateComponent
},
{
  path:"test",
  component:TestComponent
},
{
  path:"imgcard",
  component:PhotosComponentComponent
},
{
  path:"AppNav",
  component:AppNavigateComponent
},
{
  path:"aboutUs",
  component:AboutusComponent
},
{
  path:"foot",
  component:FirstFooterComponent
},
{
  path:"newHome",
  component:NewHomePageComponent
},
{
  path:"MyProfile",
  component:MyProfileComponent
},
{
  path:"we-offer",
  component:WeOfferComponent
},
{
  path:"newDashboard",
  component:NewDashboard1Component
},




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
