import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {Article} from "src/app/models/articles";
import {ArticlesService} from "src/app/services/articles/articles.service";

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {
  
  formGroup;
  articles:Article[];
  page : number = 0;
  pages: Array<number>;

  constructor(
    private articlesService : ArticlesService ,
  ) { }

  ngOnInit() {
    this.getAllArticlesOrderedByCreationDate();
   }

   getAllArticlesOrderedByCreationDate(){
    this.articlesService.getAllArticlesOrderedByCreationDate(this.page).subscribe(      
      data=>{      
        this.articles=data['content'];
        this.pages = new Array(data['totalPages']);       
      },
      (error)=>{
        console.log("Error");
      }
    );
  }

  
  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.getAllArticlesOrderedByCreationDate();    
  }
  
}
