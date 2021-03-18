import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import {TasteDiveService} from '../taste-dive.service'

interface Recipe {
label : string;
image : string;
url : string;
}

interface Movie {
  Name: string;
  wTeaser: string;
  yUrl: string;
}

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})

export class QuizResultsComponent implements OnInit {
  movie: Movie[];

  constructor(public recipeAPI: RecipesService, public tasteApi: TasteDiveService) { }
  
  ngOnInit(): void {
    
  }

  addRecipeFavorites(recipe: Recipe) {
    this.recipeAPI.favMeals.push(recipe);
    console.log(this.recipeAPI.favMeals);
    // this.tasteApi.favMovies.push(movie);
  };
  
  addMovieFavorites(movie: Movie) {
    this.tasteApi.favMovies.push(movie);
    console.log(this.tasteApi.favMovies);
    // this.tasteApi.favMovies.push(movie);
  }
  // favoriteMeal(recipe: Recipe) {
  //   // console.log("the recipe is", recipe);
  //   this.recipeAPI.favMeals.push(recipe);
  //   // console.log("the favorties are", this.recipeAPI.favMeals);
  // }

  // // need to define the Movie Interface up @ top of page
  // favoriteMovie(movie: Movie) {
  //   // console.log("the recipe is", recipe);
  //   this.tasteApi.favMovies.push(movie);
  //   // console.log("the favorties are", this.tasteApi.favMovies);
  // }
}

// addFavorite = function (favorites: Favorites): void {
//   this.RecipeAPI.favorites.push({
//     label: favorites.label,
//     image: favorites.image,
//     url: favorites.url,
//   });
