import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/movie';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'f3c98b285e47795a9a7b680a8823a475';
  constructor(private http: HttpClient) {}

  getMovies(type: string = 'popular') {
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    );
  }
}
