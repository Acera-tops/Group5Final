import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import {TasteDiveService} from '../taste-dive.service'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public recipeAPI: RecipesService, public tasteApi: TasteDiveService) { }

  getResults() {
    this.recipeAPI.getRecipes();
    this.tasteApi.getTaste();
  }

    ngOnInit(): void {
      
    }

}

