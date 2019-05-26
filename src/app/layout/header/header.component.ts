import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/core/providers/local-storage.service';

@Component({
    selector: 'ap-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
    isCollapsed = false;

    constructor(
        private layout: LayoutService,
        private translate: TranslateService,
        private localStorage: LocalStorageService
    ) { }

    ngOnInit() { }

    /**
     * 切换左侧菜单是否收缩
     */
    toggleCollapsed(): void {
        this.isCollapsed = !this.isCollapsed;
        this.layout.setIsCollapsed(this.isCollapsed);
    }

    /**
     * 切换语言
     * @param value 切换语言
     */
    switchLang(value) {
        this.translate.use(value);
        this.localStorage.set('lang', value);
    }
}
