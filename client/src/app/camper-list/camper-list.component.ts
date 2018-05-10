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

  
  //creates empty arrays to save full camper list to
  campers = [];

  //creates empty arrays for sorting campers by gender
  maleCampers = [];
  femaleCampers = [];
  nonbinaryCampers = [];
  
  //creates empty arrays for sorting campers by room type
  maleCabin = [];
  femaleCabin = [];
  coedCabin = [];
  coedMaleCabin = [];
  coedFemaleCabin = [];

  //sets camper breakdown to be hidden by default
  breakdown:boolean = false;


  constructor(
	  private camperService:CamperService, 
    private route: ActivatedRoute, 
    private router: Router
  ){ }	

  //refreshes camper list on each page load
  ngOnInit() {
    this.refreshCamperList();
  }

  //shows/hides camper count breakdown
  showBreakdown(mode):void {
    this.breakdown = (mode ? true : false);
  }

  //navigates to new camper form
  newCamper():void {
    this.router.navigate(['/new']);
  }

  //updates camper lists
  refreshCamperList(): void {
    //captures the camper list from the service
  	this.camperService.listCampers()
  		.subscribe((campers:any) => {
  			this.campers = campers;

        //clears out the filtered lists
        this.maleCampers = [];
        this.femaleCampers = [];
        this.nonbinaryCampers = [];
        this.maleCabin = [];
        this.femaleCabin = [];
        this.coedCabin = [];
        this.coedMaleCabin = [];
        this.coedFemaleCabin = [];

        //loops through camper list, pushing to filtered lists as appropriate
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