import { Category } from "./category";
import { Tags } from "./tags";
import { User } from "./user";

export class Article {
    title:string;
    slug:string;
    mainImage:string;
    createdDate:string;
    user:User;
    content:String;
    totalComments:number;
    categories:Category[];
    tags:Tags[];
}