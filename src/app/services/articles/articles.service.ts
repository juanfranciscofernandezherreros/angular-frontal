import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ArticlesService {

    public apiUrl: string;

    private articles:string = environment.blogs;
  
    constructor(private http: HttpClient) { }

    getAllArticlesOrderedByCreationDate(page:number){
        return this.http.get(this.articles+"/api/public/v1/articles?page="+page);
    }

    getAllArticlesRandom(){
        return this.http.get(this.articles+"/api/public/v1/articles/random");
    }

    filterArticlesByCategory(categoryId:number , page:number){
        return this.http.get(this.articles+"/api/public/v1/articles?categories="+categoryId+"&page="+page);
    }

    filterArticlesByTag(tagId:number , page:number){
        return this.http.get(this.articles+"/api/public/v1/articles?tags="+tagId+"&page="+page);
    }

    filterArticlesByName(title:String , page:number){
        return this.http.get(this.articles+"/api/public/v1/articles?title="+title+"&page="+page);
    }

}