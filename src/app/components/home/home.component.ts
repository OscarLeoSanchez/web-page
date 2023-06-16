import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() parameters = new EventEmitter<any>();

  country: string = 'Colombia';
  category: string = 'tecnología';
  news: any[] = [];
  listNews: any[] = [];

  constructor(private sharedService: SharedService, private newsService: NewsService) { }

  ngOnInit(): void {
    this.searchNews();
    this.receiveNews();
  }
  searchNews() {
    const params = {
      country: this.country,
      category: this.category
    }
    this.sharedService.sendDatos(params); 
  }

  receiveNews() {
    const params = {
      country: this.country,
      category: this.category
    }
    this.newsService.getNews(params).then((data: any) => {
      this.news = data.articles;
      this.news = this.news.filter(news => news.urlToImage !== null).slice(0, 21).map(news => {
        const fecha = new Date(news.publishedAt);
        const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        const formattedDate = fecha.toLocaleDateString('es-ES', options as Intl.DateTimeFormatOptions);
        
        return {
          ...news,
          publishedAt: formattedDate
        };
      });
      this.listNews = data.articles;
      this.listNews = this.listNews.filter(listNews => listNews.urlToImage !== null).slice(20, 26).map(listNews => {
        const fecha = new Date(listNews.publishedAt);
        const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        const formattedDate = fecha.toLocaleDateString('es-ES', options as Intl.DateTimeFormatOptions);

        return {
          ...listNews,
          publishedAt: formattedDate
        };
      });
      console.log(this.listNews);
    });

  }

  onFilterChange(category: string) {
    this.category = category;
    this.searchNews();
    this.receiveNews();
  }

}
