import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: '', component: HomeComponent },
  { path: 'post/:id/:title', component: SinglePostComponent },
  { path: '**', component: NotfoundpageComponent }, //always put it at the end of the list 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
