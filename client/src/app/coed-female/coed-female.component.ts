import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coed-female',
  templateUrl: './coed-female.component.html',
  styleUrls: ['./coed-female.component.css']
})
export class CoedFemaleComponent implements OnInit {

  //lets camper record come from camper list into this component
  @Input() camper;  

  constructor() { }

  ngOnInit() {
  }

}
