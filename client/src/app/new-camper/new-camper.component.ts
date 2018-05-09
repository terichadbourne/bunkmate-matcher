import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CamperService } from '../camper.service';

@Component({
  selector: 'app-new-camper',
  templateUrl: './new-camper.component.html',
  styleUrls: ['./new-camper.component.css'], 
  providers: [CamperService]
})
export class NewCamperComponent implements OnInit {

  @Output() newCamperEvent = new EventEmitter();
  camper:any = {};

  constructor(
  	private camperService:CamperService
  ) { }

  ngOnInit() {
  }

//called when button is clicked on new camper form
//saves record to DB using camper service and clears form  
  save(newCamperForm):void {
  	this.camperService.createCamper(this.camper)
  		.subscribe((camper) => {
  			console.log(camper);
  			this.newCamperEvent.emit();
  			newCamperForm.reset();
  		});
  }

}
