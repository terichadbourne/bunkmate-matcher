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

  //sets sort to be by cabin type by default
  genderSort:boolean = false;

  //sets labels to be hideen by default
  hiddenLabels:boolean = true;

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

  //toggles sort between gender (true) and cabin preference (false)
  sortGender(mode):void {
    this.genderSort = (mode ? true : false);
  }

  //toggles sort between gender (true) and cabin preference (false)
  hideLabels(mode):void {
    this.hiddenLabels = (mode ? true : false);
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

        //rewrites filtered camper lists by gender and acceptable room

        this.maleCampers = this.campers.filter(function(camper){
          return camper.gender == 'Male';
        });

        this.femaleCampers = this.campers.filter(function(camper){
          return camper.gender == 'Female';
        });

        this.nonbinaryCampers = this.campers.filter(function(camper){
          return camper.gender == 'Non-Binary';
        });

        this.femaleCabin = this.campers.filter(function(camper){
          return camper.acceptableRoom == 'Female';
        });

        this.maleCabin = this.campers.filter(function(camper){
          return camper.acceptableRoom == 'Male';
        });

        this.coedMaleCabin = this.campers.filter(function(camper){
          return camper.acceptableRoom == 'Co-Ed or Male';
        });

        this.coedFemaleCabin = this.campers.filter(function(camper){
          return camper.acceptableRoom == 'Co-Ed or Female';
        });

        this.coedCabin = this.campers.filter(function(camper){
          return camper.acceptableRoom == 'Co-Ed';
        });
	
      });
  }

}