import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { INGREDIENTS } from './ingredient-list';
import { SANDWICH } from './sandwich-list';
import { Sandwich } from './sandwich';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SammichService {
sammichorder: '';

constructor(public dialog: MatDialog) { }

getIngredients(): Ingredient[] {
	return INGREDIENTS;
}
getSandwich(): Sandwich[] {
	return SANDWICH;
}


}
