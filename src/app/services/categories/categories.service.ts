import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService {
  

  public apiUrl: string;

  private categories:string = environment.blogs;
  
  constructor(private http: HttpClient) { }
  
  getAllCategories(){
    return this.http.get(this.categories+"/api/public/v1/categories");
  }

  getCategoryBySlug(category: String) : Observable<any>{
    return this.http.get(this.categories+"/api/public/v1/category?slug="+category);
  }


}