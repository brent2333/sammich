import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { INGREDIENTS } from './ingredient-list';
import { SANDWICH } from './sandwich-list';
import { Sandwich } from './sandwich';

@Injectable({
  providedIn: 'root'
})
export class SammichService {
successMessage;

constructor() { }

getIngredients(): Ingredient[] {
	return INGREDIENTS;
}
getSandwich(): Sandwich[] {
	return SANDWICH;
}
getSuccess(): string {
	return "thanks, coming right up";
}


}
