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
    public inspired: boolean = false;
    public surprised: boolean = false;
  public question2Answer: string = "";
    public italy: boolean = false;
    public mexico: boolean = false;
    public japan: boolean = false;
    public morocco: boolean = false;
  public question3Answer: string = "";
    public squareUp: boolean = false;
    public goodLooking: boolean = false;
    public run: boolean = false;
    public lights: boolean = false;
  public question4Answer: string = "";
    public veggie: boolean = false;
    public meat: boolean = false;
    public pasta: boolean = false;
    public salad: boolean = false;
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
    else if (this.question1Answer==="inspired" && this.question2Answer==="italy"
    && this.question3Answer==="run" && this.question4Answer==="veggie"){
      this.foodSearch="vegetable lasagna";
      this.movieSearch="The Pursuit of Happyness";
    }
    else if (this.question1Answer==="inspired" && this.question2Answer==="italy"
    && this.question3Answer==="lights" && this.question4Answer==="veggie"){
      this.foodSearch="vegetable lasagna";
      this.movieSearch="Moonlight";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="italy"
    && this.question3Answer==="run" && this.question4Answer==="veggie"){
      this.foodSearch="vegetable lasagna";
      this.movieSearch="The Shining";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="italy"
    && this.question3Answer==="lights" && this.question4Answer==="veggie"){
      this.foodSearch="vegetable lasagna";
      this.movieSearch="Parasite";
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
    else if (this.question1Answer==="inspired" && this.question2Answer==="italy"
    && this.question3Answer==="run" && this.question4Answer==="meat"){
      this.foodSearch="spaghetti & meatballs";
      this.movieSearch="The Pursuit of Happyness";
    }
    else if (this.question1Answer==="inspired" && this.question2Answer==="italy"
    && this.question3Answer==="lights" && this.question4Answer==="meat"){
      this.foodSearch="spaghetti & meatballs";
      this.movieSearch="Moonlight";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="italy"
    && this.question3Answer==="run" && this.question4Answer==="veggie"){
      this.foodSearch="spaghetti & meatballs";
      this.movieSearch="The Shining";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="italy"
    && this.question3Answer==="lights" && this.question4Answer==="veggie"){
      this.foodSearch="spaghetti & meatballs";
      this.movieSearch="Parasite";
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
    else if (this.question1Answer==="inspired" && this.question2Answer==="mexico"
    && this.question3Answer==="run" && this.question4Answer==="veggie"){
      this.foodSearch="sweet potato quesadillas";
      this.movieSearch="The Pursuit of Happyness";
    }
    else if (this.question1Answer==="inspired" && this.question2Answer==="mexico"
    && this.question3Answer==="lights" && this.question4Answer==="veggie"){
      this.foodSearch="sweet potato quesadilla";
      this.movieSearch="Moonlight";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="mexico"
    && this.question3Answer==="run" && this.question4Answer==="veggie"){
      this.foodSearch="sweet potato quesadilla";
      this.movieSearch="The Shining";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="mexico"
    && this.question3Answer==="lights" && this.question4Answer==="veggie"){
      this.foodSearch="sweet potato quesadilla";
      this.movieSearch="Parasite";
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
    else if (this.question1Answer==="alive" && this.question2Answer==="mexico"
    && this.question3Answer==="goodLooking" && this.question4Answer==="meat"){
          this.foodSearch="steak tacos"; 
          this.movieSearch="John Wick";
        }
    else if (this.question1Answer==="inspired" && this.question2Answer==="mexico"
    && this.question3Answer==="run" && this.question4Answer==="meat"){
      this.foodSearch="steak tacos";
      this.movieSearch="The Pursuit of Happyness";
    }
    else if (this.question1Answer==="inspired" && this.question2Answer==="mexico"
    && this.question3Answer==="lights" && this.question4Answer==="meat"){
      this.foodSearch="steak tacos";
      this.movieSearch="Moonlight";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="mexico"
    && this.question3Answer==="run" && this.question4Answer==="meat"){
      this.foodSearch="steak tacos";
      this.movieSearch="The Shining";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="mexico"
    && this.question3Answer==="lights" && this.question4Answer==="meat"){
      this.foodSearch="steak tacos";
      this.movieSearch="Parasite";
    }

    //this is Hannah matrix food 5
    else if (this.question1Answer==="happy" && this.question2Answer==="italy"
    && this.question3Answer==="squareUp" && this.question4Answer==="pasta"){
          this.foodSearch="pasta limone"; 
          this.movieSearch="Wonder Woman";
        }
    else if (this.question1Answer==="happy" && this.question2Answer==="italy"
    && this.question3Answer==="goodLooking" && this.question4Answer==="pasta"){
          this.foodSearch="pasta limone"; 
          this.movieSearch="The Internship";
        }
    else if (this.question1Answer==="alive" && this.question2Answer==="italy"
    && this.question3Answer==="squareUp" && this.question4Answer==="pasta"){
          this.foodSearch="pasta limone"; 
          this.movieSearch="Run All Night";
        }
    else if (this.question1Answer==="alive" && this.question2Answer==="italy"
    && this.question3Answer==="goodLooking" && this.question4Answer==="pasta"){
          this.foodSearch="pasta limone"; 
          this.movieSearch="John Wick";
        }
    else if (this.question1Answer==="inspired" && this.question2Answer==="italy"
    && this.question3Answer==="run" && this.question4Answer==="pasta"){
      this.foodSearch="pasta limone";
      this.movieSearch="The Pursuit of Happyness";
    }
    else if (this.question1Answer==="inspired" && this.question2Answer==="italy"
    && this.question3Answer==="lights" && this.question4Answer==="pasta"){
      this.foodSearch="pasta limone";
      this.movieSearch="Moonlight";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="italy"
    && this.question3Answer==="run" && this.question4Answer==="pasta"){
      this.foodSearch="pasta limone";
      this.movieSearch="The Shining";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="italy"
    && this.question3Answer==="lights" && this.question4Answer==="pasta"){
      this.foodSearch="pasta limone";
      this.movieSearch="Parasite";
    }

    //this is Hannah matrix food 6
    else if (this.question1Answer==="happy" && this.question2Answer==="italy"
    && this.question3Answer==="squareUp" && this.question4Answer==="salad"){
          this.foodSearch="summer farro salad"; 
          this.movieSearch="Wonder Woman";
        }
    else if (this.question1Answer==="happy" && this.question2Answer==="italy"
    && this.question3Answer==="goodLooking" && this.question4Answer==="salad"){
          this.foodSearch="summer farro salad"; 
          this.movieSearch="The Internship";
        }
    else if (this.question1Answer==="alive" && this.question2Answer==="italy"
    && this.question3Answer==="squareUp" && this.question4Answer==="salad"){
          this.foodSearch="summer farro salad"; 
          this.movieSearch="Run All Night";
        }
    else if (this.question1Answer==="alive" && this.question2Answer==="italy"
    && this.question3Answer==="goodLooking" && this.question4Answer==="salad"){
          this.foodSearch="summer farro salad"; 
          this.movieSearch="John Wick";
        }
    else if (this.question1Answer==="inspired" && this.question2Answer==="italy"
    && this.question3Answer==="run" && this.question4Answer==="salad"){
      this.foodSearch="summer farro salad";
      this.movieSearch="The Pursuit of Happyness";
    }
    else if (this.question1Answer==="inspired" && this.question2Answer==="italy"
    && this.question3Answer==="lights" && this.question4Answer==="salad"){
      this.foodSearch="summer farro salad";
      this.movieSearch="Moonlight";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="italy"
    && this.question3Answer==="run" && this.question4Answer==="salad"){
      this.foodSearch="summer farro salad";
      this.movieSearch="The Shining";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="italy"
    && this.question3Answer==="lights" && this.question4Answer==="salad"){
      this.foodSearch="summer farro salad";
      this.movieSearch="Parasite";
    }

     //this is Hannah matrix food 7
    else if (this.question1Answer==="happy" && this.question2Answer==="mexico"
    && this.question3Answer==="squareUp" && this.question4Answer==="pasta"){
      this.foodSearch="Spicy Chorizo Pasta"; 
      this.movieSearch="Wonder Woman";
    }
     else if (this.question1Answer==="happy" && this.question2Answer==="mexico"
     && this.question3Answer==="goodLooking" && this.question4Answer==="pasta"){
      this.foodSearch="Spicy Chorizo Pasta"; 
      this.movieSearch="The Internship";
    }
     else if (this.question1Answer==="alive" && this.question2Answer==="mexico"
     && this.question3Answer==="squareUp" && this.question4Answer==="pasta"){
      this.foodSearch="Spicy Chorizo Pasta"; 
      this.movieSearch="Run All Night";
     }
     else if (this.question1Answer==="alive" && this.question2Answer==="mexico"
     && this.question3Answer==="goodLooking" && this.question4Answer==="pasta"){
      this.foodSearch="Spicy Chorizo Pasta"; 
      this.movieSearch="John Wick";
    }
     else if (this.question1Answer==="inspired" && this.question2Answer==="mexico"
     && this.question3Answer==="run" && this.question4Answer==="pasta"){
      this.foodSearch="Spicy Chorizo Pasta";
      this.movieSearch="The Pursuit of Happyness";
    }
     else if (this.question1Answer==="inspired" && this.question2Answer==="mexico"
     && this.question3Answer==="lights" && this.question4Answer==="pasta"){
      this.foodSearch="Spicy Chorizo Pasta";
      this.movieSearch="Moonlight";
    }
     else if (this.question1Answer==="surprised" && this.question2Answer==="mexico"
     && this.question3Answer==="run" && this.question4Answer==="pasta"){
      this.foodSearch="Spicy Chorizo Pasta";
      this.movieSearch="The Shining";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="mexico"
    && this.question3Answer==="lights" && this.question4Answer==="pasta"){
      this.foodSearch="Spicy Chorizo Pasta";
      this.movieSearch="Parasite";
    }

    //this is Hannah matrix food 8
    else if (this.question1Answer==="happy" && this.question2Answer==="mexico"
    && this.question3Answer==="squareUp" && this.question4Answer==="salad"){
      this.foodSearch="Chipotle Jicama Salad"; 
      this.movieSearch="Wonder Woman";
    }
    else if (this.question1Answer==="happy" && this.question2Answer==="mexico"
    && this.question3Answer==="goodLooking" && this.question4Answer==="salad"){
      this.foodSearch="Chipotle Jicama Salad"; 
      this.movieSearch="The Internship";
    }
    else if (this.question1Answer==="alive" && this.question2Answer==="mexico"
    && this.question3Answer==="squareUp" && this.question4Answer==="salad"){
      this.foodSearch="Chipotle Jicama Salad"; 
      this.movieSearch="Run All Night";
    }
    else if (this.question1Answer==="alive" && this.question2Answer==="mexico"
    && this.question3Answer==="goodLooking" && this.question4Answer==="salad"){
      this.foodSearch="Chipotle Jicama Salad"; 
      this.movieSearch="John Wick";
    }
    else if (this.question1Answer==="inspired" && this.question2Answer==="mexico"
    && this.question3Answer==="run" && this.question4Answer==="salad"){
      this.foodSearch="Chipotle Jicama Salad";
      this.movieSearch="The Pursuit of Happyness";
    }
    else if (this.question1Answer==="inspired" && this.question2Answer==="mexico"
    && this.question3Answer==="lights" && this.question4Answer==="salad"){
      this.foodSearch="Chipotle Jicama Salad";
      this.movieSearch="Moonlight";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="mexico"
    && this.question3Answer==="run" && this.question4Answer==="salad"){
      this.foodSearch="Chipotle Jicama Salad";
      this.movieSearch="The Shining";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="mexico"
    && this.question3Answer==="lights" && this.question4Answer==="salad"){
      this.foodSearch="Chipotle Jicama Salad";
      this.movieSearch="Parasite";
    }

    //this is Hannah matrix food 9
    else if (this.question1Answer==="happy" && this.question2Answer==="japan"
    && this.question3Answer==="squareUp" && this.question4Answer==="veggie"){
      this.foodSearch="Vegan Sushi"; 
      this.movieSearch="Wonder Woman";
    }
    else if (this.question1Answer==="happy" && this.question2Answer==="japan"
    && this.question3Answer==="goodLooking" && this.question4Answer==="veggie"){
      this.foodSearch="Vegan Sushi"; 
      this.movieSearch="The Internship";
    }
    else if (this.question1Answer==="alive" && this.question2Answer==="japan"
    && this.question3Answer==="squareUp" && this.question4Answer==="veggie"){
      this.foodSearch="Vegan Sushi"; 
      this.movieSearch="Run All Night";
    }
    else if (this.question1Answer==="alive" && this.question2Answer==="japan"
    && this.question3Answer==="goodLooking" && this.question4Answer==="veggie"){
      this.foodSearch="Vegan Sushi"; 
      this.movieSearch="John Wick";
    }
    else if (this.question1Answer==="inspired" && this.question2Answer==="japan"
    && this.question3Answer==="run" && this.question4Answer==="veggie"){
      this.foodSearch="Vegan Sushi";
      this.movieSearch="The Pursuit of Happyness";
    }
    else if (this.question1Answer==="inspired" && this.question2Answer==="japan"
    && this.question3Answer==="lights" && this.question4Answer==="veggie"){
      this.foodSearch="Vegan Sushi";
      this.movieSearch="Moonlight";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="japan"
    && this.question3Answer==="run" && this.question4Answer==="veggie"){
      this.foodSearch="Vegan Sushi";
      this.movieSearch="The Shining";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="japan"
    && this.question3Answer==="lights" && this.question4Answer==="veggie"){
      this.foodSearch="Vegan Sushi";
      this.movieSearch="Parasite";
    }
    

 //this is Hannah matrix food 10
    else if (this.question1Answer==="happy" && this.question2Answer==="japan"
    && this.question3Answer==="squareUp" && this.question4Answer==="meat"){
       this.foodSearch="Pork Gyoza"; 
       this.movieSearch="Wonder Woman";
     }
    else if (this.question1Answer==="happy" && this.question2Answer==="japan"
    && this.question3Answer==="goodLooking" && this.question4Answer==="meat"){
       this.foodSearch="Pork Gyoza"; 
       this.movieSearch="The Internship";
     }
    else if (this.question1Answer==="alive" && this.question2Answer==="japan"
    && this.question3Answer==="squareUp" && this.question4Answer==="meat"){
       this.foodSearch="Pork Gyoza"; 
       this.movieSearch="Run All Night";
     }
    else if (this.question1Answer==="alive" && this.question2Answer==="japan"
    && this.question3Answer==="goodLooking" && this.question4Answer==="meat"){
       this.foodSearch="Pork Gyoza"; 
       this.movieSearch="John Wick";
     }
    else if (this.question1Answer==="inspired" && this.question2Answer==="japan"
    && this.question3Answer==="run" && this.question4Answer==="meat"){
      this.foodSearch="Pork Gyoza";
      this.movieSearch="The Pursuit of Happyness";
    }
    else if (this.question1Answer==="inspired" && this.question2Answer==="japan"
    && this.question3Answer==="lights" && this.question4Answer==="meat"){
      this.foodSearch="Pork Gyoza";
      this.movieSearch="Moonlight";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="japan"
    && this.question3Answer==="run" && this.question4Answer==="meat"){
      this.foodSearch="Pork Gyoza";
      this.movieSearch="The Shining";
    }
    else if (this.question1Answer==="surprised" && this.question2Answer==="japan"
    && this.question3Answer==="lights" && this.question4Answer==="meat"){
      this.foodSearch="Pork Gyoza";
      this.movieSearch="Parasite";
    }

 //this is Hannah matrix food 11
 else if (this.question1Answer==="happy" && this.question2Answer==="japan"
 && this.question3Answer==="squareUp" && this.question4Answer==="pasta"){
       this.foodSearch="Udon"; 
       this.movieSearch="Wonder Woman";
     }
 else if (this.question1Answer==="happy" && this.question2Answer==="japan"
 && this.question3Answer==="goodLooking" && this.question4Answer==="pasta"){
       this.foodSearch="Udon"; 
       this.movieSearch="The Internship";
     }
 else if (this.question1Answer==="alive" && this.question2Answer==="japan"
 && this.question3Answer==="squareUp" && this.question4Answer==="pasta"){
       this.foodSearch="Udon"; 
       this.movieSearch="Run All Night";
     }
 else if (this.question1Answer==="alive" && this.question2Answer==="japan"
 && this.question3Answer==="goodLooking" && this.question4Answer==="pasta"){
       this.foodSearch="Udon"; 
       this.movieSearch="John Wick";
     }
 else if (this.question1Answer==="inspired" && this.question2Answer==="japan"
 && this.question3Answer==="run" && this.question4Answer==="pasta"){
   this.foodSearch="Udon";
   this.movieSearch="The Pursuit of Happyness";
 }
 else if (this.question1Answer==="inspired" && this.question2Answer==="japan"
 && this.question3Answer==="lights" && this.question4Answer==="pasta"){
   this.foodSearch="Udon";
   this.movieSearch="Moonlight";
 }
 else if (this.question1Answer==="surprised" && this.question2Answer==="japan"
 && this.question3Answer==="run" && this.question4Answer==="pasta"){
  this.foodSearch="Udon";
  this.movieSearch="The Shining";
}
else if (this.question1Answer==="surprised" && this.question2Answer==="japan"
    && this.question3Answer==="lights" && this.question4Answer==="pasta"){
      this.foodSearch="Udon";
      this.movieSearch="Parasite";
    }

 //this is Hannah matrix food 12
 else if (this.question1Answer==="happy" && this.question2Answer==="japan"
 && this.question3Answer==="squareUp" && this.question4Answer==="salad"){
       this.foodSearch="Harusame Salad"; 
       this.movieSearch="Wonder Woman";
     }
 else if (this.question1Answer==="happy" && this.question2Answer==="japan"
 && this.question3Answer==="goodLooking" && this.question4Answer==="salad"){
       this.foodSearch="Harusame Salad"; 
       this.movieSearch="The Internship";
     }
 else if (this.question1Answer==="alive" && this.question2Answer==="japan"
 && this.question3Answer==="squareUp" && this.question4Answer==="salad"){
       this.foodSearch="Harusame Salad"; 
       this.movieSearch="Run All Night";
     }
 else if (this.question1Answer==="alive" && this.question2Answer==="japan"
 && this.question3Answer==="goodLooking" && this.question4Answer==="salad"){
       this.foodSearch="Harusame Salad"; 
       this.movieSearch="John Wick";
     }
 else if (this.question1Answer==="inspired" && this.question2Answer==="japan"
 && this.question3Answer==="run" && this.question4Answer==="salad"){
   this.foodSearch="Harusame Salad";
   this.movieSearch="The Pursuit of Happyness";
 }
 else if (this.question1Answer==="inspired" && this.question2Answer==="japan"
 && this.question3Answer==="lights" && this.question4Answer==="salad"){
   this.foodSearch="Harusame Salad";
   this.movieSearch="Moonlight";
 }
 else if (this.question1Answer==="surprised" && this.question2Answer==="japan"
    && this.question3Answer==="run" && this.question4Answer==="salad"){
      this.foodSearch="Harusame Salad";
      this.movieSearch="The Shining";
    }
else if (this.question1Answer==="surprised" && this.question2Answer==="japan"
    && this.question3Answer==="lights" && this.question4Answer==="salad"){
      this.foodSearch="Harusame Salad";
      this.movieSearch="Parasite";
    }

 //this is Hannah matrix food 13
 else if (this.question1Answer==="happy" && this.question2Answer==="morocco"
 && this.question3Answer==="squareUp" && this.question4Answer==="veggie"){
       this.foodSearch="Kefta tagine"; 
       this.movieSearch="Wonder Woman";
     }
 else if (this.question1Answer==="happy" && this.question2Answer==="morocco"
 && this.question3Answer==="goodLooking" && this.question4Answer==="veggie"){
       this.foodSearch="Kefta tagine"; 
       this.movieSearch="The Internship";
     }
 else if (this.question1Answer==="alive" && this.question2Answer==="morocco"
 && this.question3Answer==="squareUp" && this.question4Answer==="veggie"){
       this.foodSearch="Kefta tagine"; 
       this.movieSearch="Run All Night";
     }
 else if (this.question1Answer==="alive" && this.question2Answer==="morocco"
 && this.question3Answer==="goodLooking" && this.question4Answer==="veggie"){
       this.foodSearch="Kefta tagine"; 
       this.movieSearch="John Wick";
     }
 else if (this.question1Answer==="inspired" && this.question2Answer==="morocco"
 && this.question3Answer==="run" && this.question4Answer==="veggie"){
   this.foodSearch="Kefta tagine";
   this.movieSearch="The Pursuit of Happyness";
 }
 else if (this.question1Answer==="inspired" && this.question2Answer==="morocco"
 && this.question3Answer==="lights" && this.question4Answer==="veggie"){
   this.foodSearch="Kefta tagine";
   this.movieSearch="Moonlight";
 }
 else if (this.question1Answer==="surprised" && this.question2Answer==="morocco"
 && this.question3Answer==="run" && this.question4Answer==="veggie"){
   this.foodSearch="Kefta tagine";
   this.movieSearch="The Shining";
 }
else if (this.question1Answer==="surprised" && this.question2Answer==="morocco"
 && this.question3Answer==="lights" && this.question4Answer==="veggie"){
   this.foodSearch="Kefta tagine";
   this.movieSearch="Parasite";
 }

//this is Hannah matrix food 14
 else if (this.question1Answer==="happy" && this.question2Answer==="morocco"
 && this.question3Answer==="squareUp" && this.question4Answer==="meat"){
       this.foodSearch="Moroccan Beef Stew"; 
       this.movieSearch="Wonder Woman";
     }
 else if (this.question1Answer==="happy" && this.question2Answer==="morocco"
 && this.question3Answer==="goodLooking" && this.question4Answer==="meat"){
       this.foodSearch="Moroccan Beef Stew"; 
       this.movieSearch="The Internship";
     }
 else if (this.question1Answer==="alive" && this.question2Answer==="morocco"
 && this.question3Answer==="squareUp" && this.question4Answer==="meat"){
       this.foodSearch="Moroccan Beef Stew"; 
       this.movieSearch="Run All Night";
     }
 else if (this.question1Answer==="alive" && this.question2Answer==="morocco"
 && this.question3Answer==="goodLooking" && this.question4Answer==="meat"){
       this.foodSearch="Moroccan Beef Stew"; 
       this.movieSearch="John Wick";
     }
 else if (this.question1Answer==="inspired" && this.question2Answer==="morocco"
 && this.question3Answer==="run" && this.question4Answer==="meat"){
   this.foodSearch="Moroccan Beef Stew";
   this.movieSearch="The Pursuit of Happyness";
 }
 else if (this.question1Answer==="inspired" && this.question2Answer==="morocco"
 && this.question3Answer==="lights" && this.question4Answer==="meat"){
   this.foodSearch="Moroccan Beef Stew";
   this.movieSearch="Moonlight";
 }
 else if (this.question1Answer==="surprised" && this.question2Answer==="morocco"
 && this.question3Answer==="run" && this.question4Answer==="meat"){
   this.foodSearch="Moroccan Beef Stew";
   this.movieSearch="The Shining";
 }
else if (this.question1Answer==="surprised" && this.question2Answer==="morocco"
 && this.question3Answer==="lights" && this.question4Answer==="meat"){
   this.foodSearch="Moroccan Beef Stew";
   this.movieSearch="Parasite";
 }

  //this is Hannah matrix food 15
  else if (this.question1Answer==="happy" && this.question2Answer==="morocco"
  && this.question3Answer==="squareUp" && this.question4Answer==="pasta"){
        this.foodSearch="Pastilla"; 
        this.movieSearch="Wonder Woman";
      }
  else if (this.question1Answer==="happy" && this.question2Answer==="morocco"
  && this.question3Answer==="goodLooking" && this.question4Answer==="pasta"){
        this.foodSearch="Pastilla"; 
        this.movieSearch="The Internship";
      }
  else if (this.question1Answer==="alive" && this.question2Answer==="morocco"
  && this.question3Answer==="squareUp" && this.question4Answer==="pasta"){
        this.foodSearch="Pastilla"; 
        this.movieSearch="Run All Night";
      }
  else if (this.question1Answer==="alive" && this.question2Answer==="morocco"
  && this.question3Answer==="goodLooking" && this.question4Answer==="pasta"){
        this.foodSearch="Pastilla"; 
        this.movieSearch="John Wick";
      }
  else if (this.question1Answer==="inspired" && this.question2Answer==="jmorocco"
  && this.question3Answer==="run" && this.question4Answer==="pasta"){
    this.foodSearch="Pastilla";
    this.movieSearch="The Pursuit of Happyness";
  }
  else if (this.question1Answer==="inspired" && this.question2Answer==="morocco"
  && this.question3Answer==="lights" && this.question4Answer==="pasta"){
    this.foodSearch="Pastilla";
    this.movieSearch="Moonlight";
  }
  else if (this.question1Answer==="surprised" && this.question2Answer==="morocco"
  && this.question3Answer==="run" && this.question4Answer==="pasta"){
    this.foodSearch="Pastilla";
    this.movieSearch="The Shining";
  }
 else if (this.question1Answer==="surprised" && this.question2Answer==="morocco"
  && this.question3Answer==="lights" && this.question4Answer==="pasta"){
    this.foodSearch="Pastilla";
    this.movieSearch="Parasite";
  }

  //this is Hannah matrix food 16
 else if (this.question1Answer==="happy" && this.question2Answer==="morocco"
 && this.question3Answer==="squareUp" && this.question4Answer==="salad"){
       this.foodSearch="Bakoula Salad"; 
       this.movieSearch="Wonder Woman";
     }
 else if (this.question1Answer==="happy" && this.question2Answer==="morocco"
 && this.question3Answer==="goodLooking" && this.question4Answer==="salad"){
       this.foodSearch="Bakoula Salad"; 
       this.movieSearch="The Internship";
     }
 else if (this.question1Answer==="alive" && this.question2Answer==="morocco"
 && this.question3Answer==="squareUp" && this.question4Answer==="salad"){
       this.foodSearch="Bakoula Salad"; 
       this.movieSearch="Run All Night";
     }
 else if (this.question1Answer==="alive" && this.question2Answer==="morocco"
 && this.question3Answer==="goodLooking" && this.question4Answer==="salad"){
       this.foodSearch="Bakoula Salad"; 
       this.movieSearch="John Wick";
     }
 else if (this.question1Answer==="inspired" && this.question2Answer==="morocco"
 && this.question3Answer==="run" && this.question4Answer==="salad"){
   this.foodSearch="Bakoula Salad";
   this.movieSearch="The Pursuit of Happyness";
 }
 else if (this.question1Answer==="inspired" && this.question2Answer==="morocco"
 && this.question3Answer==="lights" && this.question4Answer==="salad"){
   this.foodSearch="Bakoula Salad";
   this.movieSearch="Moonlight";
 }
 else if (this.question1Answer==="surprised" && this.question2Answer==="morocco"
 && this.question3Answer==="run" && this.question4Answer==="salad"){
   this.foodSearch="Bakoula Salad";
   this.movieSearch="The Shining";
 }
if (this.question1Answer==="surprised" && this.question2Answer==="morocco"
 && this.question3Answer==="lights" && this.question4Answer==="salad"){
   this.foodSearch="Bakoula Salad";
   this.movieSearch="Parasite";
 }

    this.recipeAPI.getRecipes(this.foodSearch);
    this.tasteApi.getTaste(this.movieSearch);
  }

    ngOnInit(): void {
      
    }
}