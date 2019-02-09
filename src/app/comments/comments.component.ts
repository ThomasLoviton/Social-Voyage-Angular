import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../services/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

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

}
