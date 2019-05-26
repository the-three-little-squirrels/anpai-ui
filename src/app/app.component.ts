import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anpai-ui';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('zh-cn');
    translate.use('zh-cn');
  }
}
