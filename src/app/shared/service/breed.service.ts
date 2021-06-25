import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { AxiosInstance } from "axios";


@Injectable({
  providedIn: 'root'
})
export class BreedService {

  apiUrl = 'https://api.TheDogAPI.com/v1/breeds';

  getDogimgUrl = 'https://api.theDogapi.com/v1/images/search?';

 /* httpOptions = {
    headers: new HttpHeaders({
      'x-api-key' : 's2de03501-4d8b-4a9c-880e-7ce676256d1c'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }


  public getBreedWithFlag(flag: string): Observable<responsePageable> {
    return this.httpClient.get<responsePageable>(this.apiUrl + '?flag' + flag);
  } */


  constructor(private http: HttpClient){}

    listar(){

      return this.http.get<any[]>(`${this.apiUrl}`);

    }

    imaginar(breedID: string, numberPage: string){
      return this.http.get<any[]>(`${this.getDogimgUrl}breed_id=${breedID}&limit=${numberPage}`);
    }

    // infoDogs(name:string){
    //   console.log("paminha")
    //   return this.http.get<any[]>(`${this.apiUrlSearch+name}`);
    // }


}
