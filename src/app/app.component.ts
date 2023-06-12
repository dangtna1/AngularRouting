import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-routing';

  constructor(private router: Router) {

  }

  ngOnInit() {
    const obsTest$ = new Observable(observer => {
      observer.next('Return 0 from observer'); //act like return
      observer.next('Return 1 from observer'); //act like return
      setTimeout(() => {
        observer.next('Return Timeout function'); //asynchronously
      })
      observer.next('Return 2 from observer'); //act like return
    }).subscribe(value => {
      console.log(value);
    });

    obsTest$.unsubscribe();
  }

  onSubmit() {
    // this.router.navigate(['/posts'])
    // this.router.navigate(['/post', 1, 'postTitle']);
    this.router.navigate(['/posts'], {queryParams: {page: 1, orderBy: 'newest'}});
  }
}
