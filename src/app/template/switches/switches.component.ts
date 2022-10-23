import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  public person = {
    gender: "",
    notifications: false
  };

  public termsAndConditions: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
