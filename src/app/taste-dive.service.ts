import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TasteDiveService {
  apiKey = '404369-AprilTop-1D5TOMF0';
  url = 'http://localhost:8080/api/similar';
  entertainmentResults: any[] = [];
  favMovies: any[] = [];
  // public movieSearch: string = "";
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getTaste(movieSearch) {
    const requestUrl = this.getUrlWithAPIKey() + '&q=' + movieSearch;
    console.log(requestUrl);

    this.http.get(requestUrl).subscribe(
      (response: any) => {
        this.entertainmentResults = response.Similar.Results.map((result) => {
          // Bypassing angular's security in order
          // to display youtube links in an iFrame
          // By default, angular blocks iFrames 
          // across different domains
          result.yUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            result.yUrl
          );

          return result;
        });
      });
  }

  getUrlWithAPIKey() {
    // define new parameter that's called thru getTaste & add to the end of &q= *insert search variable*
    // return 'http://localhost:8080/api/similar?info=1&limit=1&q=Guardians%20Of%20The%20Galaxy%20Vol.%202&k=404369-AprilTop-1D5TOMF0'
    return `${this.url}?info=1&limit=1&k=${this.apiKey}`;
    // return `${this.url}?k=${this.apiKey}`;
    // return `${this.url}?  &k=${this.apiKey}`;
  }
}
