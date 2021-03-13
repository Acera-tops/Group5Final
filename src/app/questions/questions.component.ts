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
  // HC added the below -- can change variable names as needed
  // IF WE CHANGE QUESTION 2 -- ALSO NEEDS TO BE UPDATED IN HTML
  // public italy: boolean = false;
  // public cancun: boolean = false;
  // public question3Answer: string = "";
  //   public adventure: boolean = false;
  //   public romance: boolean = false;
  // OR USE THIS FOR Q 3 -- variables need to be updated in HTML
  //   public squareUp: boolean = false;
  //   public goodLooking: boolean = false;
  // public question4Answer: string = "";
  //   public veggie: boolean = false;
  //   public meat: boolean = false;
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

// HC ADDED FROM RACHELS EXCEL MAPPING
// getResults() {
//   console.log(this.question1Answer);
//   // lets do food
//   if (this.question2Answer==="italy" && this.question4Answer==="veggie"){
//     this.foodSearch="veggie lasagna"; 
//   } 
//   if (this.question2Answer==="italy" && this.question4Answer==="meat){
//     this.foodSearch="spaghetti & meatballs"; 
//   } 
//   if (this.question2Answer==="cancun" && this.question4Answer==="veggie"){
//     this.foodSearch="sweet potato quesadilla"; 
//   } 
//   if (this.question2Answer==="cancun" && this.question4Answer==="meat"){
//     this.foodSearch="steak tacos"; 
//   } 
//   // now lets do entertainment 
//   if (this.question1Answer==="happy" && this.question3Answer==="squareUp"){
//     this.entertainmentSearch="Wonder Woman"; 
//   } 
//   if (this.question1Answer==="happy" && this.question3Answer==="goodLooking"){
//     this.entertainmentSearch="The Internship"; 
//   } 
//   if (this.question1Answer==="alive" && this.question3Answer==="squareUp"){
//     this.entertainmentSearch="Run All Night"; 
//   } 
//   if (this.question1Answer==="alive" && this.question3Answer==="goodLooking"){
//     this.entertainmentSearch="John Wick"; 
//   } 
//   this.recipeAPI.getRecipes(this.foodSearch);
//   // this.recipeAPI.getRecipes();
//   this.tasteApi.getTaste(this.entertainmentSearch);
// }