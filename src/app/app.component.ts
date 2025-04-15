import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  catUrl: string = '';

  getRandomCat() {
    const timestamp = new Date().getTime();
    this.catUrl = `https://cataas.com/cat?ts=${timestamp}`;
    console.log('catUrl:', this.catUrl);
  }
}
