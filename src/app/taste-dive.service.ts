import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasteDiveService {
  apiKey = "404369-AprilTop-1D5TOMF0";
  url = "http://localhost:8080/api/similar";
  entertainmentResults: any[] = [];

  constructor(private http: HttpClient) { }

  getTaste() {
    const requestUrl = 
      this.getUrlWithAPIKey(); 
      console.log(requestUrl)

    this.http.get(requestUrl).subscribe(
      (response: any) => {
        this.entertainmentResults = response.Similar.Results;
        console.log(this.entertainmentResults);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUrlWithAPIKey() {
    return 'http://localhost:8080/api/similar?q=Guardians%20Of%20The%20Galaxy%20Vol.%202&k=404369-AprilTop-1D5TOMF0'
    // return `${this.url}?k=${this.apiKey}`;
    // return `${this.url}?  &k=${this.apiKey}`;
  }
}
