import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coed-male',
  templateUrl: './coed-male.component.html',
  styleUrls: ['./coed-male.component.css']
})
export class CoedMaleComponent implements OnInit {

  //lets camper record come from camper list into this component
  @Input() camper;

  constructor() { }

  ngOnInit() {
  }

}
