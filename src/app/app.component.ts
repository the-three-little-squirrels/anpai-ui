import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './core/providers/local-storage.service';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anpai-ui';

  constructor(private translate: TranslateService,
    private localStorage: LocalStorageService) {
    this.localStorage.set('lang', this.localStorage.get('lang') ? this.localStorage.get('lang') : 'zh-cn');
    this.translate.setDefaultLang(this.localStorage.get('lang'));
    this.translate.use(this.localStorage.get('lang'));
  }
}
