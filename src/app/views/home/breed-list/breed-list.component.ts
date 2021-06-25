import { Component, OnInit } from '@angular/core';
import { BreedService } from 'src/app/shared/service/breed.service';


@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {

  //variáveis que conectará os dados da api para o front-end
  breeds: Array<any> = [];
  breedsImg: Array<any> = [];

  info: Array<any> = [];
  dogID: string = '';
  origin: string = '';
  bredFor: string = '';
  lifeSpan: string = '';
  temperament: string = '';
  breedGroup: string = '';
  pages: Array<any> = [1,2,3,4,5,6,7,8,9,10,11,12];
  picNumber: string = '';



  constructor(
    public breedService: BreedService
  ) {

   }

  ngOnInit(): void {
    this.listar();
  }


  selectedInfo(event:any){

    this.dogID = event.value;
  }


  pictureHandler(event:any){
    this.picNumber = event.value;
  }

  //passando cada variável conectando com um unico dado especifico de uma raça de cachorro
  showDogInfo(){
    var dogFiltered=this.breeds.find( dog => dog.id === this.dogID);

    this.origin = dogFiltered.origin;
    this.bredFor = dogFiltered.bred_for;
    this.lifeSpan = dogFiltered.life_span;
    this.temperament = dogFiltered.temperament;
    this.breedGroup = dogFiltered.breed_group;
  }

  // transferindo os dados da api de raça para a variável breeds usada no html
  listar(){
    this.breedService.listar().subscribe(dados => this.breeds = dados);
  }

  //função assíncrona para dar a variavel dogImg as imagens da api
  async saveDogImg(dogImg: any){
      this.breedsImg = dogImg;
      console.log(this.breedsImg)
  }

  infoDogs(){
    this.showDogInfo();
    this.breedService.imaginar(this.dogID, this.picNumber).subscribe(async dados => await this.saveDogImg(dados))
  }

}
