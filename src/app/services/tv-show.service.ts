import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "https://api.themoviedb.org/3/"
  apiKey: string = "c728834c29064e3c13e47c46952e5421"
  option: string = "popular"
  option2: string = "top_rated"
  option3: string = "latest"

  getPopular(page:number){
    return this.http.get(`${this.baseUrl}tv/${this.option}?page=${page}&api_key=${this.apiKey}`)
  }
  getTopRated(page:number){
    return this.http.get(`${this.baseUrl}tv/${this.option2}?page=${page}&api_key=${this.apiKey}`)
  }
  getLatest(){
    return this.http.get(`${this.baseUrl}tv/${this.option3}?api_key=${this.apiKey}`)
  }
  getTvShow(id:number|undefined){
    return this.http.get(`${this.baseUrl}tv/${id}?api_key=${this.apiKey}`)
  }
  searchTvShow(query:string,page:number = 1){
    return this.http.get(`${this.baseUrl}search/tv?api_key=${this.apiKey}&query=${query}&page=${page}&include_adult=false`)
  }
  getSimilar(id:number | undefined){
    return this.http.get(`${this.baseUrl}tv/${id}/similar?api_key=${this.apiKey}`)
  }
  getActorsTv(id:number | undefined){
    return this.http.get(`${this.baseUrl}tv/${id}/credits?api_key=${this.apiKey}`)
  }
  getEpisode(idTv: number, season: number){
    return this.http.get(`https://api.themoviedb.org/3/tv/${idTv}/season/${season}?api_key=${this.apiKey}`)
   }
  // getEpisode(tvId:number | undefined,seasonNumber:number){
  //   return this.http.get(`${this.baseUrl}tv/${tvId}/season/${seasonNumber}?api_key=${this.apiKey}`)
  // }

  // getGenres(){
  //   return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}`)
  // }
  // getMovieByCate(categoryId : string ){
  //   return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&include_adult=false&with_genres=${categoryId}`)
  //  }
}
