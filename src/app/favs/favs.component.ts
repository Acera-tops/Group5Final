import { Component, OnInit } from '@angular/core';
//DO WE WANT THESE ?
// import { RecipesService } from '../recipes.service';
// import {TasteDiveService} from '../taste-dive.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

  // when deleting a fav item use this function as cheatsheet 

  // removeFavMoive(recipe: number) {
  //   // console.log("the recipe is", recipe);
  //   this.recipeAPI.favorites.splice(recipe, 1);
  //   // console.log("the favorties are", this.recipeAPI.favorites);
  // }

  // removeFavMeal(recipe: number) {
  //   //   // console.log("the recipe is", recipe);
  //   //   this.recipeAPI.favorites.splice(recipe, 1);
  //   //   // console.log("the favorties are", this.recipeAPI.favorites);
  //   // }