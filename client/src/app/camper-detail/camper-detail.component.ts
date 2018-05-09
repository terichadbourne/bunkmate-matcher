//imports needed angular functionality
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//imports custom camper service
import { CamperService } from '../camper.service';

@Component({
  selector: 'app-camper-detail',
  templateUrl: './camper-detail.component.html',
  styleUrls: ['./camper-detail.component.css'], 
  providers: [CamperService]
})

export class CamperDetailComponent implements OnInit {

  camper:any; 
  editing:boolean = false;

  constructor(
  	private route: ActivatedRoute, 
  	private camperService: CamperService, 
  	private router: Router
  ) { }

  ngOnInit() {
  	this.camper = this.getCamper();
  }

  //changes status of editing boolean according to what's passed in
  setEditMode(mode):void {
  	this.editing = (mode ? true : false);
  }

  //uses the camper ID found in the URL to get camper record from camper service
  getCamper(): void {
  	const param = 
  	this.route.snapshot.paramMap.get('id');
  	this.camperService.getCamper(param)
  		.subscribe((camper)=> {
  			this.camper = camper;
  		})
  }

  //when submit is clicked, save form entries as object data
  updateCamper(form:any): void {
  	debugger;
  	this.camper.firstName = form.firstName;
  	this.camper.lastName = form.lastName;
  	this.camper.gender = form.gender;
  	this.camper.snoring = form.snoring;
  	this.camper.sleepHeaviness = form.sleepHeaviness;
  	this.camper.bunkmateGender = form.bunkmateGender;

  	//passes id and data to camper service to pass to API
  	this.camperService.updateCamper(
  		this.camper._id, this.camper
  	)
  	.subscribe((result) => {
  		this.router.navigate(['/campers'])
  	});
  }

  //after confirmation, deletes camper record and redirects to camper list
  deleteCamper():void {
  	if (confirm("Do you really want to delete this camper record?")) {
  		this.camperService.deleteCamper(this.camper._id)
  			.subscribe((camper) => {
  				this.router.navigate(['/campers'])
  			})
  	}
  }

  goBack():void {
  	this.router.navigate(['/campers']);
  }
}
