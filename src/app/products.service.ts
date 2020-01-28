import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [{ "id": 1, "name": "Witcher 3: Wild Hunt", "label": "The game focuses on narrative, and has a dialogue wheel which allows players to choose how to respond to non-player characters. Geralt must make decisions which change the state of the world and lead to 36 possible endings, affecting the lives of in-game characters.", "price": 49, imageUrl: "/assets/images/witcher.png" },
  { "id": 2, "name": "The Elder Scrolls V: Skyrim", "label": " The player may freely roam over the land of Skyrim which is an open world environment consisting of wilderness expanses, dungeons, cities, towns, fortresses, and villages.", "price": 35, imageUrl: "/assets/images/skyrim.jpg" },
  { "id": 3, "name": "Resident Evil 2", "label": "Resident Evil 2 is a survival horror game developed and published by Capcom. A remake of the 1998 game of the same name, it was released for Microsoft Windows, PlayStation 4, and Xbox One.", "price": 45, imageUrl: "/assets/images/evil.jpg" }];
  
  constructor() { }

  public getProducts(): Product[] {
    return this.products;
  }
}

export class Product {
  id: number;
  name: string;
  label: string;
  price: number;
  imageUrl: string;
}

