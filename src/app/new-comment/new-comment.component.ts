import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommentService } from '../services/comment/comment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  colors = ['#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE'];
  colorsInverse = ['#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F'];
  sec:number = new Date().getSeconds();

  comments;

  constructor(private route: ActivatedRoute, private location: Location, private commentService: CommentService) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  addComment(text: string, author: string) {
    const id = +this.route.snapshot.paramMap.get('id');
    text = text.trim();
    author = author.trim();

    if (!text) {
      return;
    }
    this.commentService.addComment(id, {text, author})
      .subscribe(data => this.comments = data);
  }
  
}
