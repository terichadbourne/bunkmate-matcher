import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  maleCampers = [];
  femaleCampers = [];
  nonbinaryCampers = [];
  
  maleCabin = [];
  femaleCabin = [];
  coedCabin = [];
  coedMaleCabin = [];
  coedFemaleCabin = [];

  breakdown:boolean = false;


  constructor(
	  private camperService:CamperService, 
    private route: ActivatedRoute, 
    private router: Router
  ){ }	

  ngOnInit() {
    this.refreshCamperList();
  }

  //changes visibility of create form 
  showBreakdown(mode):void {
    this.breakdown = (mode ? true : false);
  }

  //navigates to new camper form
  newCamper():void {
    this.router.navigate(['/new']);
  }

  //updates camper list (called on each page load)
  refreshCamperList(): void {
    //capture the camper list from the service
  	this.camperService.listCampers()
  		.subscribe((campers:any) => {
  			this.campers = campers;

        //clear out the filtered lists
        this.maleCampers = [];
        this.femaleCampers = [];
        this.nonbinaryCampers = [];
        this.maleCabin = [];
        this.femaleCabin = [];
        this.coedCabin = [];
        this.coedMaleCabin = [];
        this.coedFemaleCabin = [];

        //loop through camper list, pushing to filtered lists as appropriate
        this.campers.forEach((camper) => {
          if (camper.gender == 'Male') {
            this.maleCampers.push(camper);
          }
          if (camper.gender == 'Female') {
            this.femaleCampers.push(camper);
          }
          if (camper.gender == 'Non-Binary') {
            this.nonbinaryCampers.push(camper);
          }
          if (camper.acceptableRoom == 'Female') {
            this.femaleCabin.push(camper);
          }
          if (camper.acceptableRoom == 'Male') {
            this.maleCabin.push(camper);
          }
          if (camper.acceptableRoom == 'Co-Ed') {
            this.coedCabin.push(camper);
          }
          if (camper.acceptableRoom == 'Co-Ed or Female') {
            this.coedFemaleCabin.push(camper);
          }
          if (camper.acceptableRoom == 'Co-Ed or Male') {
            this.coedMaleCabin.push(camper);
          }
        });  		
      });
  }

}