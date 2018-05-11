/* 
Teri Chadbourne
CSCI E-31, Spring 2018
Assignment 7
*/

//import needed angular functionality
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//import custom camper service
import { CamperService } from '../camper.service';

@Component({
  selector: 'app-new-camper',
  templateUrl: './new-camper.component.html',
  styleUrls: ['./new-camper.component.css'], 
  providers: [CamperService]
})

export class NewCamperComponent implements OnInit {

  @Output() newCamperEvent = new EventEmitter();
  
  //set up empty camper object to save to
  camper:any = {};

  constructor(
    private route: ActivatedRoute, 
    private camperService: CamperService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  //saves record to DB using camper service 
  //clears form and returns to camper list 
  save(newCamperForm):void {
  	this.camperService.createCamper(this.camper)
  		.subscribe((camper) => {
  			console.log(camper);
  			this.newCamperEvent.emit();
  			newCamperForm.reset();
        this.router.navigate(['/campers']);
  		});
  }

  //clears form and returns to camper list
  clearAndHide(newCamperForm):void {
  	newCamperForm.reset();
    this.router.navigate(['/campers']);
  }

}
