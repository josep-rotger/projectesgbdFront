import { Component } from '@angular/core';

@Component({
  selector: 'app-joc',
  templateUrl: './Game.component.html',
  styleUrls: ['./Game.component.css']
})
export class JocComponent {
  private id: number;
  private name: string;
  private company: string;
  private genre: string;
  private subgenre: string;
  private description: string;
  private img;
  private valoracio: number;
  private price;

  // Constructor
  constructor() {
    this.id = -1;
    this.name = '';
    this.company = '';
    this.genre = '';
    this.subgenre = '';
    this.description = '';
    this.img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACdCAMAAACZ+IrkAAAAb1BMVEUdtTwAAAAHPiEdrzsKQBcKPBQevD4FNyAfwEAFFA0HQiMctzsScisHQCIcqzoAKBwXgTADJRUHLRkKTyQEMx8GOiANWSUUey4RbywJSiMHHxMFDgwOVhwajTUDLx4JORQAABcBEhQFHBQNRhoJMxPIYl7aAAABwElEQVR4nO3b226CQBRAUQqKII7aIooXRKv//41NbdI4dDinCYz0svfzHFjhhQyjQUBERERERERERDRoWRbLdRvPOuqqcia1kXnxRpwuq268uDxOpLaJOJ5sV9L0sVSevaabFaFQkcu6OJemw8kMHTpJ12LUdEnuHjS96orCTF0ZVdcy1++zM7vU1X6s6MZ759jO9Kqbpk/OVJ17LEWHDh06dOjQoUOHDh26H6IrJ8V7Zu++Ta3oavfYPrxdtbNus81vjd0dgrlUcKjdcx8X3Sof2HReIhacFlKnSB7viNOaL0x7oVnM/d5e14XtoUP3L3XnF6nzwDr3u+AzdOjQDayLrTPNJNJ0SePIs+OZp1K1tNooupm9vPJqC6L8uLJSdPbqYx755a2toyVTKLrCetEVa7+6yNaF6NA9SHe/r5nquvu86/LXZytFZ6/eXTzrWj49fLORZ93oT+u8vmfRoUOHDh06dOjQoUP3G3XpZSSWDqobx5FUVg+rSzKp5sn7w3XicnTo0KFDhw4dOnTo0KH7qmtssq6K7movrz2fkzV+8VEp/3lvLF/6fXaBvSNU//Df3EJ6tREREREREVGfvQHFXVeCqqEmSwAAAABJRU5ErkJggg==";
    this.valoracio = 3;
    this.price = -1;
  }
  
  // Metode per saber el nombre d'estrelles de la valoracio a representar
  obtenirNumeroEstrelles(): any[] {
    const estrelles = [];

    for (let i = 1; i <= 5; i++) {
      estrelles.push({ activa: i <= this.valoracio });
    }

    return estrelles;
  }

  // Getters
  getName(){
    return this.name;
  }

  getCompany(){
    return this.company;
  }

  getGenre(){
    return this.genre;
  }

  getSubGenre(){
    return this.subgenre;
  }

  getDescription(){
    return this.description;
  }

  getImage(){
    return this.img;
  }

  getValoracio(){
    return this.valoracio;
  }

  getPrice(){
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

  setValoracio(valoracio: number) {
    this.valoracio= valoracio;
  }

  setPrice(price: number) {
    this.price = price;
  }
}
