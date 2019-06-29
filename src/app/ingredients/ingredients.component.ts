import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { SammichService } from '../sammich.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  constructor(private SammichService: SammichService, private dialog: MatDialog) { }

ingredients;
sandwich;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
getIngredients(): void {
  this.ingredients = this.SammichService.getIngredients();
}
getSandwich(): void {
  this.sandwich = this.SammichService.getSandwich();
}

    openDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(OrderComponent, dialogConfig);
    }

  ngOnInit() {
    this.getIngredients();
    this.getSandwich();
  }

}
