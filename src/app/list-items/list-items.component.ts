import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  private products: Product[];

  constructor(private productsService: ProductsService, private cardService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

}
