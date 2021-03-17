import { User } from "./user";
import { Audit } from "./audit";

export class Comentarios {
    id: number;
    contenido:String;
    authorComment:User;
    articleId:number;
    parentId:number;
    auditDTO:Audit;
    isanswer:boolean;
    comentarioUserNotRegistered;
    level: number;
}