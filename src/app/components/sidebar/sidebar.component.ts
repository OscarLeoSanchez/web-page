import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() filter = new EventEmitter<string>();

  filterNews(category: string) {
    this.filter.emit(category);
  }
}
