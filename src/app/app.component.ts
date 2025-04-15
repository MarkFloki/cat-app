import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  catUrl: string = '';
  favorites: string[] = [];
  showFavorites: boolean = false;

  getRandomCat() {
    const timestamp = new Date().getTime();
    this.catUrl = `https://cataas.com/cat?ts=${timestamp}`;
  }

  addToFavorites() {
    if (this.catUrl && !this.favorites.includes(this.catUrl)) {
      this.favorites.push(this.catUrl);
    }
  }

  removeFromFavorites(cat: string) {
    this.favorites = this.favorites.filter(fav => fav !== cat);
  }

  toggleFavorites() {
    this.showFavorites = !this.showFavorites;
  }
}
