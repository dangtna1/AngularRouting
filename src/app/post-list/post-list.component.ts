import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: Array<any> = [
    {id: 1, title: 'Post 1', content: 'Content of post 1'},
    {id: 1, title: 'Post 2', content: 'Content of post 2'},
    {id: 1, title: 'Post 3', content: 'Content of post 3'},
    {id: 1, title: 'Post 4', content: 'Content of post 4'},
    {id: 1, title: 'Post 5', content: 'Content of post 5'},
  ]

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(value => {
      const page = value.get('page');
      const order = value.get('orderBy');

      console.log(value);
      console.log(page);
      console.log(order);
    })
  }
}
