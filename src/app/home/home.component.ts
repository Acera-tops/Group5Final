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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 Hannah: boolean = false;
 Rachel: boolean = false;
 Cherina: boolean = false;
 April: boolean = false;
 public foodSearch: string = "";
 public movieSearch: string = "";

 constructor(public recipeAPI: RecipesService, public tasteApi: TasteDiveService) { }

  toggleApril=():void=>{
    this.April = !this.April;
    this.foodSearch="Sunday Brunch: Eggs In A Basket";
    this.movieSearch="The Sixth Sense";
    this.recipeAPI.getRecipes(this.foodSearch);
    this.tasteApi.getTaste(this.movieSearch);
  }

  toggleHannah=():void=>{
    this.Hannah = !this.Hannah;
  }

  toggleCherina=():void=>{
    this.Cherina = !this.Cherina;
    this.foodSearch="salmon pasta";
    this.movieSearch="Enough";
    this.recipeAPI.getRecipes(this.foodSearch);
    this.tasteApi.getTaste(this.movieSearch); 
  }

  toggleRachel=():void=>{
    this.Rachel = !this.Rachel;
    this.foodSearch="ratatouille";
    this.movieSearch="Shrek";
    this.recipeAPI.getRecipes(this.foodSearch);
    this.tasteApi.getTaste(this.movieSearch); 
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

  ngOnInit(): void {
  };

}