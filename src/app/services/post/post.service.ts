import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private httpOptions = {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }};
  private apiUrl = 'http://localhost/social-voyage-symfony/public';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.apiUrl + '/post');
  }

  addPost(post) {
    let body = `title=${post.title}&shorttext=${post.shorttext}&text=${post.text}&author=${post.author}&urlimage=${post.urlimage}`;
    
    return this.http.post(this.apiUrl + '/post/new', body, this.httpOptions);
  }
}
