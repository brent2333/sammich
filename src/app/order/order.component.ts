import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { SammichService } from '../sammich.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
showMessage = false;
    constructor(
        private dialogRef: MatDialogRef<OrderComponent> ,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private SammichService: SammichService
        ) {

    }

    ngOnInit() {
    }


    save() {
        this.showMessage = true;
        let self = this;
        setTimeout(function() {
            self.dialogRef.close();
        }, 2000);
    }

    close() {
        this.dialogRef.close();
    }

}
