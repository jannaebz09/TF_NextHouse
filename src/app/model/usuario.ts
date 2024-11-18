import {Rol} from "./rol";

export class Usuario {
    idUsuario:number;
    DNI:string;
    nombreCompleto:string;
    email:string;
    telefono:string;
    contrasena:string;
    rol:Rol;
}
