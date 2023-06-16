import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';
import { NewsService } from './services/news.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OscarLeoSanchez';

  constructor(private sharedService: SharedService, private newsService: NewsService) { }

  // mensaje = '';

  // recibirDatos(datos: string) {
  //   this.mensaje = datos;
  //   console.log(datos);
  //   console.log('Soy el padre');
  // }

  // Function to receive the parameters from the child component
  // receiveParameters(params: any) {
  //   this.sharedService.datos$.subscribe((data: any) => {
  //     console.log('soy el padre');
  //     console.log(params);
  //     console.log(data);
  //   });
  // }

  ngOnInit(): void {
    this.sharedService.datos$.subscribe((data: any) => {
      // console.log('soy el padre');
      // console.log(data);
      this.newsService.getNews(data).then((data: any) => {
        console.log(data);
      });

    });
  }

  
}
