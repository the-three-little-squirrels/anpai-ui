import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
    selector: 'ap-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})

export class MenuComponent implements OnInit {
    isCollapsed = false;
    constructor(
        private layout: LayoutService
    ) { }

    ngOnInit() {
        this.layout.getIsCollapsed().subscribe(res => {
            this.isCollapsed = res;
        });
    }
}
