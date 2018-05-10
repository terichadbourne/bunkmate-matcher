import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campers',
  templateUrl: './campers.component.html',
  styleUrls: ['./campers.component.css']
})
export class CampersComponent implements OnInit {

//lets camper record come from camper list into campers component
  @Input() camper;
  
  constructor() { }

  ngOnInit() {
  }

}