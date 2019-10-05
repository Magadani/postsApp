import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  // tslint:disable-next-line: deprecation
  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  updatePost(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }
  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }
}