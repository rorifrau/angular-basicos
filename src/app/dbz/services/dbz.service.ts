import { Injectable } from "@angular/core";
import { Personaje } from "../interface/dbz.interface";

@Injectable()
export class DbzService{

    constructor(){
        console.log('Servicio inicializado');
    }

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7000
        }
      ];

    
      get personajes(): Personaje[]{
        return [...this._personajes];
      }



      agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
      }

}