import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(parameters: any){
    console.log('Service: ' + parameters.category);
    const url = 'https://newsapi.org/v2/everything?q='+parameters.category+'&apiKey=aeb083d6a43b463493be29e41ea246ed'
    console.log(url);
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
