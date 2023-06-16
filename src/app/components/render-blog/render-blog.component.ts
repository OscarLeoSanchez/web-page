import { Component } from '@angular/core';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-render-blog',
  templateUrl: './render-blog.component.html',
  styleUrls: ['./render-blog.component.css']
})
export class RenderBlogComponent {
  
  constructor(private RestService: RestService) { }
  blog: any;

  ngOnInit(): void {
    this.loadBlog();
  }

  public loadBlog(): void {
    this.RestService.get('http://127.0.0.1:5001/blog/1').subscribe(data => {
      console.log(data);
      this.blog = data;
    });
  }

}
