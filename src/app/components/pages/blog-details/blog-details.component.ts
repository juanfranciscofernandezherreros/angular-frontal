import { Component, OnInit } from '@angular/core';
import {Category} from "src/app/models/category";
import {Article} from "src/app/models/articles";
import {CategoriesService} from "src/app/services/categories/categories.service";
import {ArticlesService} from "src/app/services/articles/articles.service";
import {TagsService} from "src/app/services/tags/tags.service";
import { Tags } from 'src/app/models/tags';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  providers: [CategoriesService,ArticlesService,TagsService]
})
export class BlogDetailsComponent implements OnInit {

  categories: Category[];
  articlesRandom:Article[];
  articles:Article[];
  tagsRandom:Tags[];

  constructor(
    private categoriesService : CategoriesService , 
    private articlesService : ArticlesService ,
    private tagsService : TagsService
  ) { }

  ngOnInit() {
    this.getAllCategories();
    this.getAllTagsRandom();
    this.getAllArticlesRandom();
   }

  

   getAllCategories(){
    this.categoriesService.getAllCategories().subscribe(      
      data=>{      
        this.categories=data['content'];
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

  getAllArticlesRandom(){
    this.articlesService.getAllArticlesRandom().subscribe(      
      data=>{      
        this.articlesRandom=data['content'];
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

  getAllTagsRandom(){
    this.tagsService.getAllTagsRandom().subscribe(      
      data=>{      
        this.tagsRandom=data['content'];
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

  getAllArticlesByName(){
    this.articlesService.getAllArticlesByName().subscribe(      
      data=>{      
        this.articles=data['content'];
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

}
