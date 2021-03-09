import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import {TasteDiveService} from '../taste-dive.service'

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {//functinality of component goes here

  constructor(public recipeAPI: RecipesService, public tasteApi: TasteDiveService) { }
  
  //Somehow use this to generate results? - April
    // search() {
    //   console.log("search was called");
    //   this.recipeAPI.getRecipesBySearchTerm(this.searchTerm);
    //   this.redirect();
    // }

    // redirect(){
    //   this.router.navigate(["/Recipes"])
    // }


  ngOnInit(): void {
    this.recipeAPI.getRecipes();
    this.tasteApi.getTaste();
  }

}
