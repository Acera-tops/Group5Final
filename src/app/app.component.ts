import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NetflixAndGrill';
  show: boolean;

  showNav(){
    this.show = !this.show;
  }

}
