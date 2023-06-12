import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: '', component: HomeComponent },
  { path: 'post/:id/:title', component: SinglePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ApproutingModule { }
