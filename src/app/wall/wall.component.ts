import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';

import * as moment from 'moment';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  colors = ['#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE', '#000000', '#00008B', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#F5F5DC', '#FA8072', '#FFA500', '#5B3C11', '#FD6C9E', '#EE82EE'];
  colorsInverse = ['#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F', '#A3CFCD', '#00E6C0', '#008BE4', '#0076FF', '#00CE9A', '#007861', '#007B83', '#924660', '#53756A', '#0B6A60', '#435C9B', '#007561', '#00C6B2', '#006F52', '#00726F'];
  sec:number = new Date().getSeconds();
  moment = moment.locale('fr');

  posts;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts().subscribe(
      data => this.posts = data
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
