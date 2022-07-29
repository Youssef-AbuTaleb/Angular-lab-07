import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  namesArray: string[] = ['ahmed', 'omar', 'karim'];
  title = 'lab-04';
}
