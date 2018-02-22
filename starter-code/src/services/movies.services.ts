import { Injectable } from "@angular/core";
import movies from "../assets/sample-movies";
@Injectable()
export class movieServices {
  Movies: Array<object> = movies;
  getMovies() {
    return movies;
  }
  getMovie(id: Number) {
    this.Movies.filter(e => {
      if (this.Movies["id"] === id) return movies;
    });
  }
}
