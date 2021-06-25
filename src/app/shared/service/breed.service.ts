import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BreedService {

  apiUrl = 'https://api.TheDogAPI.com/v1/breeds'; //api com os dados dos dogs por raças

  getDogimgUrl = 'https://api.theDogapi.com/v1/images/search?'; //api com múltiplas fotos da cada raça


  constructor(private http: HttpClient){}
    //função para conectar o serviço da api de raça no TS
    listar(){
      return this.http.get<any[]>(`${this.apiUrl}`);
    }

    //função  para conectar o serviço da api de fotos pelo id e limitando por quantidade
    imaginar(breedID: string, numberPage: string){
      return this.http.get<any[]>(`${this.getDogimgUrl}breed_id=${breedID}&limit=${numberPage}`);
    }
}
