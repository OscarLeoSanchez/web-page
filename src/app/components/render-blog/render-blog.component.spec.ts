import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderBlogComponent } from './render-blog.component';

describe('RenderBlogComponent', () => {
  let component: RenderBlogComponent;
  let fixture: ComponentFixture<RenderBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderBlogComponent]
    });
    fixture = TestBed.createComponent(RenderBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
