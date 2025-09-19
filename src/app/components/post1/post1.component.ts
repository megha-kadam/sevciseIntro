import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Ipost } from 'src/app/shared/models/posts.interface';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.scss']
})
export class Post1Component implements OnInit {
  //  postArr : Array<Ipost> = [];
  //  postService = new PostService();
  constructor(private _postService : PostService) { }

  postArr = this._postService.postsArr;

  ngOnInit(): void {
   this.postArr= this._postService.fetchAllPost()
  }

  onRemove(){
    this._postService.postsArr.pop()
  }

}
