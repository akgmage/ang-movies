import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=f3c98b285e47795a9a7b680a8823a475'
    );
  }
}
