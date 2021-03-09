import { Component, OnInit } from '@angular/core';
// Moved this to quiz results component - April
  // import { RecipesService } from '../recipes.service';
  // import {TasteDiveService} from '../taste-dive.service'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }
  // Moved this to quiz results component - April
    // constructor(public recipeAPI: RecipesService, public tasteApi: TasteDiveService) { }

  //Left over from previous project - April
    // search() {
    //   console.log("search was called");
    //   this.recipeAPI.getRecipesBySearchTerm(this.searchTerm);
    // }

  ngOnInit(): void {
  }
  // Moved this to quiz results component - April
    // ngOnInit(): void {
    //   this.recipeAPI.getRecipes();
    //   this.tasteApi.getTaste();
    // }

}

