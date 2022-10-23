import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  public person: Person = {
    name: "Nicolas",
    favorites: [
      {id: 1, name: "Far cry"},
      {id: 2, name: "Battlefield"}
    ]
  }

  public newGame: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public addGame() {
    if(this.newGame === "") return;
    const newFavoriteGame: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }
    this.person.favorites.push({...newFavoriteGame});
    this.newGame = "";
  }

  public save() {
    console.log("form posted");
  }

  public remove(index: number) {
    this.person.favorites.splice(index, 1);
  }

}
