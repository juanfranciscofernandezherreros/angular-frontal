import { Component, OnInit } from '@angular/core';
import {Article} from "src/app/models/articles";
import {ArticlesService} from "src/app/services/articles/articles.service";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  providers: [ArticlesService]
})
export class BlogDetailsComponent implements OnInit {

  article: Article;  
  
  constructor(
    private articlesService : ArticlesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.articlesService.getArticleBySlug(this.route.snapshot.paramMap.get('slug')).subscribe(      
      data=>{      
        this.article = data;
      },
      (error)=>{
        console.log("Error");
      }
    );

  }

}
