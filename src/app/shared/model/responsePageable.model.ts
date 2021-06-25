export class responsePageable{
  content: any[];
  breeds: any[];
  height: number;
  width: number;
  id: number;
  name: string;
  bredFor: string;
  breedGroup: string;
  lifeSpan: string;
  temperament: string;







  constructor(content: any, breeds: any, height: number, width: number, id: number, name: string, breedGroup: string,
    bredFor: string, lifeSpan: string, temperament: string){
    this.content = content;
    this.breeds = breeds;
    this.height = height;
    this.width = width;
    this.id = id;
    this.name = name;
    this.bredFor = bredFor;
    this.breedGroup = breedGroup;
    this.lifeSpan = lifeSpan;
    this.temperament = temperament;
  }
}


