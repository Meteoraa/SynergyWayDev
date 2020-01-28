import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { CartItemsComponent } from './cart-items/cart-items.component';


const routes : Routes = [
    {
        path: 'list-items',
        component : ListItemsComponent
    },
    {
        path: 'cart-items',
        component: CartItemsComponent
    },
    {
        path: '',
        redirectTo: 'list-items',
        pathMatch: 'full'
    }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }