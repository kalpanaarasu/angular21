import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit,AfterViewInit,OnDestroy {

  constructor(){}
  ngOnInit(): void {
    console.log("ngoninit");
    //api call
  }
  ngAfterViewInit(): void {
    console.log("ngafterviewinit");
  }
  ngOnDestroy(): void {
    console.log("ngondestroy");
  }
}
