import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingLegendsComponent } from './building-legends/building-legends.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisConVedioComponent } from './dis-con-vedio/dis-con-vedio.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingDashboardComponent } from './landing-dashboard/landing-dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LiveClassHeaderComponent } from './live-class-header/live-class-header.component';
import { LiveClassComponent } from './live-class/live-class.component';
import { LoginsingnupComponent } from './loginsingnup/loginsingnup.component';
import { MyLiveClassComponent } from './my-live-class/my-live-class.component';
import { PersonalCoachingComponent } from './personal-coaching/personal-coaching.component';
import { ProfileComponent } from './profile/profile.component';

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
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
