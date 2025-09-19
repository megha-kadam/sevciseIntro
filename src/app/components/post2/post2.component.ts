import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Ipost } from 'src/app/shared/models/posts.interface';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component implements OnInit {
  // postArr : Array<Ipost> = [];
  // postService = new PostService();

  constructor(private _postService : PostService) { }

 postArr = this._postService.postsArr;

  ngOnInit(): void {
    //this.postArr = this.postService.fetchAllPost();
   this.postArr = this._postService.fetchAllPost()
  }

}
