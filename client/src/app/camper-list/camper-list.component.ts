import { Component, OnInit } from '@angular/core';

// imports camper service 
import { CamperService } from '../camper.service';

@Component({
  selector: 'app-camper-list',
  templateUrl: './camper-list.component.html',
  styleUrls: ['./camper-list.component.css'], 
  providers: [CamperService]
})


export class CamperListComponent implements OnInit {

  campers = [];

  constructor(
	private camperService:CamperService
  ){ }	

  ngOnInit() {
    this.refreshCamperList();
  }

  refreshCamperList(): void {
  	this.camperService.listCampers()
  		.subscribe((campers:any) => {
  			this.campers = campers;
  		});
  }

}