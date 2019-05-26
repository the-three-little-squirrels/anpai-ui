import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ap-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
    isCollapsed = false;

    constructor(
        private layout: LayoutService,
        private translate: TranslateService
    ) { }

    ngOnInit() { }

    /**
     * 切换左侧菜单是否收缩
     */
    toggleCollapsed(): void {
        this.isCollapsed = !this.isCollapsed;
        this.layout.setIsCollapsed(this.isCollapsed);
    }

    switchLang(value) {
        this.translate.use(value);
    }
}
