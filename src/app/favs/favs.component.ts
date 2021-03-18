import { Component, OnInit } from '@angular/core';
//DO WE WANT THESE ?
import { RecipesService } from '../recipes.service';
import {TasteDiveService} from '../taste-dive.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit {

  constructor(public recipeAPI: RecipesService, public tasteApi: TasteDiveService) { }

  ngOnInit(): void {
  }

  removeFavMeal(recipe: number) {
    // console.log("the recipe is", recipe);
    this.recipeAPI.favMeals.splice(recipe, 1);
    // console.log("the favorties are", this.recipeAPI.favorites);
  }

  removeFavMovie(movie: number) {
      console.log("the movie is", movie);
      this.tasteApi.favMovies.splice(movie, 1);
      // console.log("the favorties are", this.recipeAPI.favorites);
    }
}

 