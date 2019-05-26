import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
    selector: 'ap-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.css']
})

export class LayoutComponent implements OnInit {
    isCollapsed = false;
    constructor(
        private layout: LayoutService,
    ) { }

    ngOnInit() {
        this.layout.getIsCollapsed().subscribe(res => {
            this.isCollapsed = res;
        });
    }
}
