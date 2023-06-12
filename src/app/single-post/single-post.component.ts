import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(value => {
      let id = value.get('id');
      let title = value.get('title');
      console.log(id);
      console.log(title);
    })
  }
}
