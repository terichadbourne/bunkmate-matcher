/* 
Teri Chadbourne
CSCI E-31, Spring 2018
Assignment 7
*/

import { Component, OnInit } from '@angular/core';
//import { CamperService } from './camper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
//  providers: [CamperService]
})

export class AppComponent {
  title = 'Bunkmate Matcher';

  constructor(){ }	

  ngOnInit() { }
}
