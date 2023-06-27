import { Component } from '@angular/core';
import { Ingredient } from '../shared/incredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 5),
  ];
  shoppingList(shoppingList: Ingredient) {
    this.ingredients.push(shoppingList);
    console.log(shoppingList, 'hello');
  }
}
