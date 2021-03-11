import { Component, OnInit } from '@angular/core';
import {Category} from "src/app/models/category";
import {CategoriesService} from "src/app/services/categories/categories.service";
@Component({
  selector: 'app-blog-two',
  templateUrl: './blog-two.component.html',
  styleUrls: ['./blog-two.component.scss'],
  providers: [CategoriesService]
})
export class BlogTwoComponent implements OnInit {

  categories: Category[];

  constructor(
    private categoriesService : CategoriesService , 
  ) { }

  ngOnInit() {
    this.getAllCategories();
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
}
