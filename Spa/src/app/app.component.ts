import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'AngularTest';
  age = 25
  ageIncr(): void{
    this.age++
  }
}
