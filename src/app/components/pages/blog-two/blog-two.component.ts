import { Component, OnInit } from '@angular/core';
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

  articleForm: FormGroup;
  categories: Category[];
  articlesRandom:Article[];
  tagsRandom:Tags[];

  constructor(
    private categoriesService : CategoriesService , 
    private articlesService : ArticlesService ,
    private tagsService : TagsService,
    private fb: FormBuilder
  ) { }

  mandoForm = new FormGroup({
    name: new FormControl(),
  });

  ngOnInit() {
    this.getAllCategories();
    this.getAllTagsRandom();
    this.getAllArticlesRandom();
   }

   onFormSubmitTitle(): void {
    console.log('Name:' + this.mandoForm.get('name').value);
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
}
