import { Category } from "./category";
import { Tags } from "./tags";
import { User } from "./user";
import { Comentarios } from "./comentarios";

export class Article {
    id:number;
    title:string;
    slug:string;
    mainImage:string;
    createdDate:string;
    user:User;
    content:String;
    totalComments:number;
    categories:Category[];
    tags:Tags[];
    comentarios:Comentarios[];
}