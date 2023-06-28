import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/incredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is sample recipe',
      'https://minimalistbaker.com/wp-content/uploads/2017/09/DELICIOUS-Oil-Free-Roasted-Vegetables-30-minutes-simple-method-SO-healthy-and-satisfying-vegan-vegetables-plantbased-brocolli-oilfree-potato-glutenfree-10-768x1152.jpg',
      [new Ingredient('meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A test Recipe',
      'This is awesome recipe',
      'https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      [new Ingredient('meat', 2), new Ingredient('Tomato', 10)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIncredientToShoppingList(ingredients: Ingredient[]) {
    console.log('incres', ingredients);
    this.shoppingListService.addIngredients(ingredients);
  }
}
