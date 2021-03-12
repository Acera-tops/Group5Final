import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import {TasteDiveService} from '../taste-dive.service'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public question1Answer: string = "";
    public happy: boolean = false;
    public alive: boolean = false;
  public question2Answer: string = "";
    public four: boolean = false;
    public five: boolean = false;
  public foodSearch:string = "";

  constructor(public recipeAPI: RecipesService, public tasteApi: TasteDiveService) { }

  // toggleHappy(){
  //   this.happy = !this.happy;
  // }

  // toggleAlive(){
  //   this.alive = !this.alive;
  // }

  getResults() {
    console.log(this.question1Answer);
    if (this.question1Answer==="happy" && this.question2Answer==="four"){
      this.foodSearch="cupcake"; 
    } 
    if (this.question1Answer==="alive"){
      this.foodSearch="ghost pepper"; 
    }
    this.recipeAPI.getRecipes(this.foodSearch);
    // this.recipeAPI.getRecipes();
    this.tasteApi.getTaste();
  }

    ngOnInit(): void {
      
    }

}

