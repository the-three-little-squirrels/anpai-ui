import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';
import { routeAnimation } from '../animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'ap-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.css'],
    animations: [routeAnimation]
})

export class LayoutComponent implements OnInit {
    isCollapsed = false;
    routerState = true;
    routerStateCode = 'active';
    constructor(
        private layout: LayoutService,
        private router: Router
    ) {
        this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                // 每次路由跳转改变状态
                this.routerState = !this.routerState;
                this.routerStateCode = this.routerState ? 'active' : 'inactive';
            }
        });
    }

    ngOnInit() {
        this.layout.getIsCollapsed().subscribe(res => {
            this.isCollapsed = res;
        });
    }
}
