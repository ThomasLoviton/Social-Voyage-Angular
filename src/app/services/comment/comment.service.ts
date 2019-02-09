import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private httpOptions = {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }};
  private apiUrl = 'http://localhost/social-voyage-symfony/public/post';

  constructor(private http: HttpClient) { }

  getCommentsByPost(idpost) {
    return this.http.get(this.apiUrl + '/' + idpost + '/comment');
  }
}
