import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';
// import { ApproutingModule } from './approuting.module';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomeComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   { path: 'posts', component: PostListComponent},
    //   { path: '', component: HomeComponent},
    //   { path: 'post/:id/:title', component: SinglePostComponent},
    // ]),
    AppRoutingModule,
    // ApproutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
