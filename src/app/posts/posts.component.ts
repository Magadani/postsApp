import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  // tslint:disable-next-line: deprecation
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement, body: HTMLInputElement) {
    const post: any = { title: input.value, body: body.value };
    input.value = '';
    body.value = '';

    this.service.createPost(post).subscribe(response => {
      post.id = response.json().id;
      this.posts.splice(0, 0, post);

      console.log(response.json());
    });
  }
  updatePost(post) {
    this.service.updatePost(post).subscribe(response => {
      console.log(response.json());
    });
  }

  deletePost(post) {
    this.service.deletePost(post).subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
