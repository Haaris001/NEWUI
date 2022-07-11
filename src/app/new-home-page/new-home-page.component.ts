import { Component, OnInit, AfterViewInit,ViewChild,ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-new-home-page',
  templateUrl: './new-home-page.component.html',
  styleUrls: ['./new-home-page.component.css']
})
export class NewHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }
  
}
