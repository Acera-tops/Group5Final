import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import {TasteDiveService} from '../taste-dive.service'

interface Recipe {
//plug in things from the API here to define me
label : string;
image : string;
url : string;
}

interface Movie {
  //plug in things from the API here to define me
  //put in information here
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

  // new Fav function that needs to be fleshed out
  // do we want two functions: one for movies & one for recipe

  favoriteMovie(recipe: Recipe) {
    // console.log("the recipe is", recipe);
    this.recipeAPI.favMeals.push(recipe);
    // console.log("the favorties are", this.recipeAPI.favMeals);
  }

  // need to define the Movie Interface up @ top of page
  favoriteMeal(movie: Movie) {
    // console.log("the recipe is", recipe);
    this.tasteApi.favMovies.push(movie);
    // console.log("the favorties are", this.tasteApi.favMovies);
  }



}
