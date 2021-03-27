import { User } from "./user";
import { Audit } from "./audit";
import { ComentariosUserNotRegisteredDTO } from "./comentariosUserNotRegisteredDTO";

export class Comentarios {
    id: number;
    contenido:String;
    username:String;
    email:String;
    authorComment:User;
    articleId:number;
    parentId:number;
    isanswer:boolean;
    comentarioUserNotRegistered:ComentariosUserNotRegisteredDTO;
    level: number;
}