// import { Component } from '@angular/core';
import { Component, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';
import { RestService } from '../../rest.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(private RestService: RestService) { }
    blogs: any;

    ngOnInit(): void {
      this.cargarDatos();
    }

    public cargarDatos() {
      this.RestService.get('http://127.0.0.1:5001/datos').subscribe(data => {
        console.log(data);
        this.blogs = data;
      });
    }

}


