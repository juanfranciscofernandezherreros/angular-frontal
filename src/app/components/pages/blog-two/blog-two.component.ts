import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Category} from "src/app/models/category";
import {Article} from "src/app/models/articles";
import {CategoriesService} from "src/app/services/categories/categories.service";
import {ArticlesService} from "src/app/services/articles/articles.service";
import {TagsService} from "src/app/services/tags/tags.service";
import { Tags } from 'src/app/models/tags';
import { FormBuilder, FormGroup, FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-blog-two',
  templateUrl: './blog-two.component.html',
  styleUrls: ['./blog-two.component.scss'],
  providers: [CategoriesService,ArticlesService,TagsService]

})
export class BlogTwoComponent implements OnInit {
  article:Article[];
  articles:Article[];
  page : number = 0;
  pages: Array<number>;
  articleForm: FormGroup;
  categories: Category[];
  category: Category[];

  articlesRandom:Article[];
  tagsRandom:Tags[];
  title:String;
  constructor(
    private route: ActivatedRoute,
    private categoriesService : CategoriesService , 
    private articlesService : ArticlesService ,
    private tagsService : TagsService,
    private fb: FormBuilder,
    private router: Router

  ) { }

  searchTitle = new FormGroup({
    name: new FormControl(),
  });

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('category')==null && this.route.snapshot.paramMap.get('tag')==null && this.route.snapshot.paramMap.get('title')==null){
      this.getAllArticlesOrderedByCreationDate(this.searchTitle.get('name').value,0);
    }
    this.getAllCategories();
    this.getAllTagsRandom();
    this.getAllArticlesRandom();

    if(this.route.snapshot.paramMap.get('category')!=null){
      this.getAllArticlesOrderedByCategory(this.route.snapshot.paramMap.get('category'),0);
    }

    if(this.route.snapshot.paramMap.get('tag')!=null){
      this.getAllArticlesOrderedByTags(this.route.snapshot.paramMap.get('tag'),0);
    }

    if(this.route.snapshot.paramMap.get('title')!=null){
      this.getAllArticlesOrderedByName(this.route.snapshot.paramMap.get('title'));
    }

   }

   getAllArticlesOrderedByName(name:String){
      this.articlesService.filterArticlesByName(name,0).subscribe(      
        data=>{      
          this.articles=data['content'];
          this.pages = new Array(data['totalPages']);    
        },
        (error)=>{
          console.log("Error");
        }
      );
  }

   onFormSubmitTitle(): void {
      this.title = this.searchTitle.get('name').value;
      this.articlesService.filterArticlesByName(this.title,0).subscribe(      
        data=>{      
          this.articles=data['content'];
          this.pages = new Array(data['totalPages']);    
        },
        (error)=>{
          console.log("Error");
        }
      );
  } 

  getAllArticlesOrderedByCategory(category:String,page:number){
      this.categoriesService.getCategoryBySlug(category).subscribe(      
        data=>{      
          this.category= data;
          this.articlesService.filterArticlesByCategory(data.id,0).subscribe(      
            data=>{      
              this.articles=data["content"];
              this.pages = new Array(data['totalPages']);
            },
            (error)=>{
              console.log("Error");
            }
          );
        },
        (error)=>{
          console.log("Error");
        }
      );
  }

  getAllArticlesOrderedByTags(tags:String,page:number){
    this.tagsService.getTagBySlug(tags).subscribe(      
      data=>{      
        this.articlesService.filterArticlesByTag(data.id,0).subscribe(      
          data=>{      
            this.articles=data["content"];
            this.pages = new Array(data['totalPages']);
          },
          (error)=>{
            console.log("Error");
          }
        );
      },
      (error)=>{
        console.log("Error");
      }
    );
}


  getAllArticlesOrderedByCreationDate(name:String,page:number){
    if(name!=null){
      this.articlesService.filterArticlesByName(this.searchTitle.get('name').value,page).subscribe(      
        data=>{      
          this.articles=data['content'];
          this.pages = new Array(data['totalPages']);    
        },
        (error)=>{
          console.log("Error");
        }
      );
    }else{
      this.articlesService.getAllArticlesOrderedByCreationDate(page).subscribe(      
        data=>{      
          this.articles=data['content'];
          this.pages = new Array(data['totalPages']);       
        },
        (error)=>{
          console.log("Error");
        }
      );
    }
    
    
  }

  
  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getAllArticlesOrderedByCreationDate(this.searchTitle.get('name').value,this.page);    
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

  filterArticlesByCategory(categoryId:number){
    this.articlesService.filterArticlesByCategory(categoryId,0).subscribe(      
      data=>{      
        this.articles=data['content'];
        this.pages = new Array(data['totalPages']);       
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

  filterArticlesByTag(tagId:number){
    this.articlesService.filterArticlesByTag(tagId,0).subscribe(      
      data=>{      
        this.articles=data['content'];
        this.pages = new Array(data['totalPages']);       
      },
      (error)=>{
        console.log("Error");
      }
    );
  }
}
