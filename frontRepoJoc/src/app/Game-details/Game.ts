export class Game {
  public id: number;
  public name: string;
  public company: string;
  public genre: string;
  public subgenre: string;
  public description: string;
  public img: string;
  public rating: number;
  public price: number;

  // Constructor
  constructor() {
    this.id = -1;
    this.name = '';
    this.company = '';
    this.genre = '';
    this.subgenre = '';
    this.description = '';
    this.img = '';
    this.rating= -1;
    this.price = -1;
  }
  
  // Metode per saber el nombre d'estrelles de la valoracio a representar
  obtenirNumeroEstrelles(): any[] {
    const estrelles = [];

    for (let i = 1; i <= 5; i++) {
      estrelles.push({ activa: i <= this.rating });
    }

    return estrelles;
  }

  // Getters (no funcionen de moment, per aixo metodes estan publics)
  getName(): string{
    return this.name;
  }

  getCompany(): string{
    return this.company;
  }

  getGenre(): string{
    return this.genre;
  }

  getSubGenre(): string{
    return this.subgenre;
  }

  getDescription(): string{
    return this.description;
  }

  getImage(): string{
    return this.img;
  }

  getRating(): number{
    return this.rating;
  }

  getPrice(): number{
    return this.price;
  }

  // Setters
  setName(name: string){
    this.name= name;
  }

  setCompany(company: string) {
    this.company= company;
  }

  setGenre(genre: string) {
    this.genre= genre;
  }

  setSubgenre(subgenre: string) {
    this.subgenre= subgenre;
  }

  setDescription(description: string){
    this.description= description;
  }

  setImage(image: string) {
    this.img= image;
  }

  setRating(rating: number) {
    this.rating= rating;
  }

  setPrice(price: number) {
    this.price = price;
  }
}
