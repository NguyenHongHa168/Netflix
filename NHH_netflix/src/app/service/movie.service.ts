import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tmcbConfig } from '../constants/config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
httpService = inject(HttpClient);


getPopularMovie(){
  const headers = this.getHeaders()
  return this.httpService.get("https://api.themoviedb.org/3/movie/popular",{
    headers:headers
  })
}
getHeaders(){
  let headers= new HttpHeaders();
  headers= headers.append("accept","application/json");
  headers= headers.append("Authorization","Bearer " + tmcbConfig.accessToken)
  return headers
}
}
