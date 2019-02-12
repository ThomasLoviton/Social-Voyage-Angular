import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentsComponent } from './comments/comments.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    NewPostComponent,
    EditPostComponent,
    PostDetailsComponent,
    CommentsComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
