import { Component, OnInit } from '@angular/core';
import { TpComponent } from '../models/tp.component';

@Component({
    selector: 'lib-tp-table',
    templateUrl: './tp-table.component.html',
    styleUrls: ['./tp-table.component.css']
})
export class TpTableComponent extends TpComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
