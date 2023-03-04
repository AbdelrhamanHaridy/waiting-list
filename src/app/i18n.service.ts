import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  // currentLang = localStorage.getItem('language') || '';
  // localeEvent = new BehaviorSubject<string>(this.currentLang);

  constructor(private translate: TranslateService) {
  }

  changeLocale(locale: string){
    this.translate.use(locale);
    // this.localeEvent.next(locale);
  }
}
