import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ap-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})

export class ListComponent implements OnInit {

    data = [
        { name: 12 },
        { name: 12 },
        { name: 12 },
    ];

    constructor() { }

    ngOnInit() { }
}
