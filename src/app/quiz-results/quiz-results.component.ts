import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import {TasteDiveService} from '../taste-dive.service'

interface Recipe {
//plug in things from the API here to define me
label : string;
image : string;
url : string;
}

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})

export class QuizResultsComponent implements OnInit {//functionality of component goes here

  constructor(public recipeAPI: RecipesService, public tasteApi: TasteDiveService) { }
  
  ngOnInit(): void {
    
  }

  favorite(recipe: Recipe) {
    // console.log("the recipe is", recipe);
    this.recipeAPI.favMeals.push(recipe);
    // console.log("the favorties are", this.recipeAPI.favorites);
  }


  //need to create a Fav component
  // when deleting a fav item use this function to cheat
  // removeFavorite(recipe: number) {
  //   // console.log("the recipe is", recipe);
  //   this.recipeAPI.favorites.splice(recipe, 1);
  //   // console.log("the favorties are", this.recipeAPI.favorites);
  // }



}
