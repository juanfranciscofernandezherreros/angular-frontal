import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Category} from "src/app/models/category";
import {Article} from "src/app/models/articles";
import {CategoriesService} from "src/app/services/categories/categories.service";
import {ArticlesService} from "src/app/services/articles/articles.service";
import {CommentsService} from "src/app/services/comments/coments.service";
import {TagsService} from "src/app/services/tags/tags.service";
import { Tags } from 'src/app/models/tags';
import { FormBuilder, FormGroup, FormControl , Validators} from '@angular/forms';
import { Comentarios } from 'src/app/models/comentarios';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  providers: [ArticlesService , CategoriesService ,TagsService , CommentsService ]
})
export class BlogDetailsComponent implements OnInit {

  article: Article;  
  comentarios: Comentarios;  
  categories: Category[];
  articlesRandom:Article[];
  articles:Article[];
  tagsRandom:Tags[];
  model: any = {};

  content:String;
  author:String;
  email:String;
  comment:String;

  page : number = 0;
  pages: Array<number>;
  htmlString: String;
  title:String;

  constructor(
    private route: ActivatedRoute,
    private categoriesService : CategoriesService , 
    private articlesService : ArticlesService ,
    private tagsService : TagsService,
    private commentsService : CommentsService,
    private router: Router,
    private fb: FormBuilder
    ) {

     }


    searchTitle = new FormGroup({
      name: new FormControl(),
    });
  
  ngOnInit() {
    this.articlesService.getArticleBySlug(this.route.snapshot.paramMap.get('slug')).subscribe(      
      data=>{      
        this.htmlString = data.content;
        this.article = data;  
    })
    
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

  onFormSubmitTitle(): void {
    this.title = this.searchTitle.get('name').value;
    window.location.replace('/title/'+this.title);
  } 

  onFormSubmitComment(): void {    
    this.model.articleId=this.article.id;
    this.model.isanswer=false;
    this.model.contenido = this.model.contenido;
    this.model.username = this.model.username;
    this.model.email =this.model.email;
    this.model.parentId=0;
    this.model
    this.model.level=0;
    this.commentsService.createComment(this.model)        
    .subscribe(data => {    
      this.comentarios = data;    
      window.location.reload();  
    }, error => console.log(error)); 
  } 

}
