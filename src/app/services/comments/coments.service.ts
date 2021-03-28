import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Comentarios} from '../../models/comentarios';
import { Observable } from 'rxjs';

@Injectable()
export class CommentsService {

  public apiUrl: string;

  private comments:string = environment.blogs;
  
  constructor(private http: HttpClient) { }

  createComment(comentario: Comentarios):Observable<any>{
    return this.http.post(this.comments+"/api/protected/v1/comment", comentario);
  }

  getCommentById(commentId: string) : Observable<any>{
    return this.http.get(this.comments+"/api/public/v1/comment?commentId="+commentId);
  }


}