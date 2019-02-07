import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WallComponent } from './wall/wall.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/wall', pathMatch: 'full' },
  { path: 'wall', component: WallComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'post/:id/edit', component: EditPostComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
