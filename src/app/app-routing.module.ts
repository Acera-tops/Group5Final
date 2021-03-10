import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuestionsComponent} from './questions/questions.component';
import {QuizResultsComponent} from './quiz-results/quiz-results.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'Quiz', component: QuestionsComponent},
{path: 'Results', component: QuizResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
