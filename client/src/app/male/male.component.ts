import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  //lets camper record come from camper list into this component
  @Input() camper;

  constructor() { }

  ngOnInit() {
  }

}
