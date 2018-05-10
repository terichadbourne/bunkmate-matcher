import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coed',
  templateUrl: './coed.component.html',
  styleUrls: ['./coed.component.css']
})
export class CoedComponent implements OnInit {

  //lets camper record come from camper list into this component
  @Input() camper;  

  constructor() { }

  ngOnInit() {
  }

}
