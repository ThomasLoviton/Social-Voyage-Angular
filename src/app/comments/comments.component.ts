import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../services/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  colors = ['#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE'];
  colorsInverse = ['#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F'];
  sec:number = new Date().getSeconds();
  
  comment;
  comments;

  constructor(private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getCommentsByPost(id).subscribe(
      data => this.comments = data
    );
  }

  deleteComment(idcomment) {
    const idpost = +this.route.snapshot.paramMap.get('id');
    //const idcomment = +this.route.snapshot.paramMap.get('idcomment');
    this.commentService.deleteComment(idpost, idcomment).subscribe(
      data => this.comment = data
    );
    return this.getComments();
  }

}
