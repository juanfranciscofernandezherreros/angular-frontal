import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TagsService {

  public apiUrl: string;

  private tags:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  getAllTagsRandom(){
    return this.http.get(this.tags+"/api/public/v1/tags/random");
  }

  getTagBySlug(tag: String) : Observable<any>{
    return this.http.get(this.tags+"/api/public/v1/tag?slug="+tag);
  }


}