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
    public italy: boolean = false;
    public mexico: boolean = false;
  public question3Answer: string = "";
    public squareUp: boolean = false;
    public goodLooking: boolean = false;
  public question4Answer: string = "";
    public veggie: boolean = false;
    public meat: boolean = false;
  public foodSearch: string = "";
  public movieSearch: string = "";

  constructor(public recipeAPI: RecipesService, public tasteApi: TasteDiveService) { }

  getResults() {
    console.log(this.question1Answer);
    //this is Rachel Matrix food 1
    if (this.question1Answer==="happy" && this.question2Answer==="italy"
    && this.question3Answer==="squareUp" && this.question4Answer==="veggie"){
      this.foodSearch="vegetable lasagna";
      this.movieSearch="Wonder Woman"; 
    } 
    else if (this.question1Answer==="happy" && this.question2Answer==="italy"
    && this.question3Answer==="goodLooking" && this.question4Answer==="veggie"){
      this.foodSearch="vegetable lasagna";
      this.movieSearch="The Internship"; 
    } 
    else if (this.question1Answer==="alive" && this.question2Answer==="italy"
    && this.question3Answer==="squareUp" && this.question4Answer==="veggie"){
      this.foodSearch="vegetable lasagna";
      this.movieSearch="Run All Night";
    }
    else if (this.question1Answer==="alive" && this.question2Answer==="italy"
    && this.question3Answer==="goodLooking" && this.question4Answer==="veggie"){
      this.foodSearch="vegetable lasagna";
      this.movieSearch="John Wick";
    }
    //this is Rachel matrix food 2
    else if (this.question1Answer==="happy" && this.question2Answer==="italy"
    && this.question3Answer==="squareUp" && this.question4Answer==="meat"){
          this.foodSearch="spaghetti & meatballs"; 
          this.movieSearch="Wonder Woman";
        } 
    else if (this.question1Answer==="happy" && this.question2Answer==="italy"
    && this.question3Answer==="goodLooking" && this.question4Answer==="meat"){
          this.foodSearch="spaghetti & meatballs"; 
          this.movieSearch="The Internship";
        }
    else if (this.question1Answer==="alive" && this.question2Answer==="italy"
    && this.question3Answer==="squareUp" && this.question4Answer==="meat"){
          this.foodSearch="spaghetti & meatballs"; 
          this.movieSearch="Run All Night";
        } 
    else if (this.question1Answer==="alive" && this.question2Answer==="italy"
    && this.question3Answer==="goodLooking" && this.question4Answer==="meat"){
          this.foodSearch="spaghetti & meatballs"; 
          this.movieSearch="John Wick";
        } 
    //this is Rachel matrix food 3
    else if (this.question1Answer==="happy" && this.question2Answer==="mexico"
    && this.question3Answer==="squareUp" && this.question4Answer==="veggie"){
          this.foodSearch="sweet potato quesadilla"; 
          this.movieSearch="Wonder Woman";
        } 
    else if (this.question1Answer==="happy" && this.question2Answer==="mexico"
    && this.question3Answer==="goodLooking" && this.question4Answer==="veggie"){
          this.foodSearch="sweet potato quesadilla"; 
          this.movieSearch="The Internship";
        } 
    else if (this.question1Answer==="alive" && this.question2Answer==="mexico"
    && this.question3Answer==="squareUp" && this.question4Answer==="veggie"){
          this.foodSearch="sweet potato quesadilla"; 
          this.movieSearch="Run All Night";
        } 
    else if (this.question1Answer==="alive" && this.question2Answer==="mexico"
    && this.question3Answer==="goodLooking" && this.question4Answer==="veggie"){
          this.foodSearch="sweet potato quesadilla"; 
          this.movieSearch="John Wick";
        }
    //this is Rachel matrix food 4
    else if (this.question1Answer==="happy" && this.question2Answer==="mexico"
    && this.question3Answer==="squareUp" && this.question4Answer==="meat"){
          this.foodSearch="steak tacos"; 
          this.movieSearch="Wonder Woman";
        }
    else if (this.question1Answer==="happy" && this.question2Answer==="mexico"
    && this.question3Answer==="goodLooking" && this.question4Answer==="meat"){
          this.foodSearch="steak tacos"; 
          this.movieSearch="The Internship";
        }
    else if (this.question1Answer==="alive" && this.question2Answer==="mexico"
    && this.question3Answer==="squareUp" && this.question4Answer==="meat"){
          this.foodSearch="steak tacos"; 
          this.movieSearch="Run All Night";
        }
    if (this.question1Answer==="alive" && this.question2Answer==="mexico"
    && this.question3Answer==="goodLooking" && this.question4Answer==="meat"){
          this.foodSearch="steak tacos"; 
          this.movieSearch="John Wick";
        }
    
    this.recipeAPI.getRecipes(this.foodSearch);
    this.tasteApi.getTaste(this.movieSearch);
  }

    ngOnInit(): void {
      
    }

}