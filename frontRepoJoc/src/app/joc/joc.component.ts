import { Component } from '@angular/core';

@Component({
  selector: 'app-joc',
  templateUrl: './joc.component.html',
  styleUrls: ['./joc.component.css']
})
export class JocComponent {

  private nom: string="Minecraft";
  private categoria: string="Construcció";
  private descripcio: string="Descripció del joc";
  private imatge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACdCAMAAACZ+IrkAAAAb1BMVEUdtTwAAAAHPiEdrzsKQBcKPBQevD4FNyAfwEAFFA0HQiMctzsScisHQCIcqzoAKBwXgTADJRUHLRkKTyQEMx8GOiANWSUUey4RbywJSiMHHxMFDgwOVhwajTUDLx4JORQAABcBEhQFHBQNRhoJMxPIYl7aAAABwElEQVR4nO3b226CQBRAUQqKII7aIooXRKv//41NbdI4dDinCYz0svfzHFjhhQyjQUBERERERERERDRoWRbLdRvPOuqqcia1kXnxRpwuq268uDxOpLaJOJ5sV9L0sVSevaabFaFQkcu6OJemw8kMHTpJ12LUdEnuHjS96orCTF0ZVdcy1++zM7vU1X6s6MZ759jO9Kqbpk/OVJ17LEWHDh06dOjQoUOHDh26H6IrJ8V7Zu++Ta3oavfYPrxdtbNus81vjd0dgrlUcKjdcx8X3Sof2HReIhacFlKnSB7viNOaL0x7oVnM/d5e14XtoUP3L3XnF6nzwDr3u+AzdOjQDayLrTPNJNJ0SePIs+OZp1K1tNooupm9vPJqC6L8uLJSdPbqYx755a2toyVTKLrCetEVa7+6yNaF6NA9SHe/r5nquvu86/LXZytFZ6/eXTzrWj49fLORZ93oT+u8vmfRoUOHDh06dOjQoUP3G3XpZSSWDqobx5FUVg+rSzKp5sn7w3XicnTo0KFDhw4dOnTo0KH7qmtssq6K7movrz2fkzV+8VEp/3lvLF/6fXaBvSNU//Df3EJ6tREREREREVGfvQHFXVeCqqEmSwAAAABJRU5ErkJggg==";
  private valoracio: number = 3;

  obtenirNumeroEstrelles(): any[] {
    const estrelles = [];

    for (let i = 1; i <= 5; i++) {
      estrelles.push({ activa: i <= this.valoracio });
    }

    return estrelles;
  }

  getNom(){
    return this.nom;
  }

  getCategoria(){
    return this.categoria;
  }

  getValoracio(){
    return this.valoracio;
  }

  getImatge(){
    return this.imatge;
  }

  getDescripcio(){
    return this.descripcio;
  }

  setNom(name: string){
    this.nom=name;
  }

}
