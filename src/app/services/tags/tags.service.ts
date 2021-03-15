import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class TagsService {

  public apiUrl: string;

  private tags:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  getAllTagsRandom(){
    return this.http.get(this.tags+"/api/public/v1/tags/random");
  }


}