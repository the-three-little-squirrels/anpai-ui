import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
    selector: 'ap-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    isCollapsed = false;

    constructor(
        private layout: LayoutService
    ) { }

    ngOnInit() { }
    toggleCollapsed(): void {
        this.isCollapsed = !this.isCollapsed;
        this.layout.setIsCollapsed(this.isCollapsed);
    }
}
