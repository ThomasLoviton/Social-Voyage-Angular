import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PostService } from '../services/post/post.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  colors = ['#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE'];
  colorsInverse = ['#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F'];
  sec:number = new Date().getSeconds();
  moment = moment.locale('fr');
  
  post;

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  ngOnInit() {
    this.getPost();
  }

  goBack(): void {
    this.location.back();
  }

  getPost(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(
      data => this.post = data
    );
  }

  deletePost() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.deletePost(id).subscribe(
      data => this.post = data
    );
  }

  getDate(articleDate : string) : string{
    let date = moment(articleDate).format('dddd DD MMMM YYYY [à] HH[h]mm').toString();
    return date;
  }

  getDifferenceDate(articleDate : Date) : string{
    let differenceDate = moment(articleDate, "YYYY-MM-DD h:mm:ss").fromNow();
    return differenceDate;
  }

}
