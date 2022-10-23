import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public templateMenu: MenuItem[] = [
    {
      text: "Basics",
      route: "./template/basics"
    },
    {
      text: "Dynamics",
      route: "./template/dynamics"
    },
    {
      text: "Switches",
      route: "./template/switches"
    }
  ];

  public reactiveMenu: MenuItem[] = [
    {
      text: "Basics",
      route: "./reactive/basics"
    },
    {
      text: "Dynamics",
      route: "./reactive/dynamics"
    },
    {
      text: "Switches",
      route: "./reactive/switches"
    }
  ];


  public authMenu: MenuItem[] = [
    {
      text: "SignIn",
      route: "./auth/signin"
    },
    {
      text: "Login",
      route: "./auth/login"
    }
  ];

}
