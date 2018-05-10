import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit {

  //lets camper record come from camper list into this component
  @Input() camper;

  constructor() { }

  ngOnInit() {
  }

}
