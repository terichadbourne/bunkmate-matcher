import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CamperService } from '../camper.service';

@Component({
  selector: 'app-new-camper',
  templateUrl: './new-camper.component.html',
  styleUrls: ['./new-camper.component.css'], 
  providers: [CamperService]
})

export class NewCamperComponent implements OnInit {

  creating:boolean = false;

  @Output() newCamperEvent = new EventEmitter();
  camper:any = {};

  constructor(
  	private camperService:CamperService
  ) { }

  ngOnInit() {
  }

  //changes visibility of create form 
  createNewMode(mode):void {
  	this.creating = (mode ? true : false);
  }

  //called when button is clicked on new camper form
  //saves record to DB using camper service 
  //clears and hides form  
  save(newCamperForm):void {
  	this.camperService.createCamper(this.camper)
  		.subscribe((camper) => {
  			console.log(camper);
  			this.newCamperEvent.emit();
  			newCamperForm.reset();
  			this.createNewMode(false);
  		});
  }

  clearAndHide(newCamperForm):void {
  	newCamperForm.reset();
  	this.createNewMode(false);
  }

}
