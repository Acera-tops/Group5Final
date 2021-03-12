import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  apiKey = "8397f4d2eeb257f413c10cc2b892b043";
  appId = "de013f42";
  url = "https://api.edamam.com/search";
  recipes: any[] = [];
  // favorites: any[] = [];
  foodSearch: string = "";
  constructor(private http: HttpClient) { }


  getRecipes() {
    const requestUrl =
      this.getUrlWithAPIKey() + "&q=" + this.foodSearch;
      console.log(requestUrl)

    this.http.get(requestUrl).subscribe(
      (response: any) => {
        console.log(response);
        this.recipes = response.hits;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUrlWithAPIKey() {
    return `${this.url}?app_id=${this.appId}&from=0&to=1&app_key=${this.apiKey}`;
  }}
