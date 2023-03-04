import { AfterViewChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { I18nService } from 'src/app/i18n.service';
@Component({
  selector: 'app-theme-control',
  templateUrl: './theme-control.component.html',
  styleUrls: ['./theme-control.component.css'],
})
export class ThemeControlComponent implements OnInit, AfterViewChecked{
  currentLang = 'ar';
  themeMode: string = localStorage.getItem('theme-mode') || 'lgt';
  drkMode: boolean;
  LeftToRight: boolean;

  @Output('changeMode') changeMode: EventEmitter<string> =
    new EventEmitter<string>();
  constructor(public translate: TranslateService, private i18nService: I18nService) {
    translate.setDefaultLang('ar');
    translate.use('ar');
  }

  ngOnInit(): void {
    // this.themeMode == "lgt" ? this.setLight() : this.setDark();
    // this.selectedLang(localStorage.getItem('language'));
    // console.log(this.themeMode);

    // this.changeMode.emit(this.themeMode == 'lgt' ? 'drk' : 'lgt');

    // this.currentLang = 'en';

    // this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale));
    if(this.currentLang === 'ar') {
      this.currentLang = 'ar';
      this.setRtl();
      // localStorage.setItem('language', 'ar');
      // this.i18nService.changeLocale('ar');
    }
  }

  ngAfterViewChecked(): void {
    // this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale));
  }
  ///////////////////////

  /* toggleLang() {
    if (this.currentLang === 'ar') {
      this.currentLang = 'en';
      this.setRtl();
      this.translate.use('ar');
      localStorage.setItem('language', `${this.currentLang}`);
      this.i18nService.changeLocale('ar');
    } else {
      this.currentLang = 'ar';
      this.setLtr();
      this.translate.use('en');
      localStorage.setItem('language', `${this.currentLang}`);
      this.i18nService.changeLocale('en');
    }
  } */
  ///////////////////////////


  changeLocale(locale: string) {
    this.i18nService.changeLocale(locale);
    localStorage.setItem('language', locale);
    if(this.currentLang === 'ar') {
      this.currentLang = 'ar';
      this.setRtl();
      // localStorage.setItem('language', 'ar');
      // this.i18nService.changeLocale('ar');
    } else if(this.currentLang === 'en') {
      this.currentLang = 'en';
      this.setLtr();
      // this.translate.use('ar');
      // localStorage.setItem('language', 'en');
      // this.i18nService.changeLocale('en');
    }
  }

  selectedLang(lang: string): void {
    if (lang == 'enLgt') {
      this.setLtr();
      this.translate.use('en');
      localStorage.setItem('language', `${lang}`);
    } else if (lang == 'arLgt') {
      this.setRtl();
      this.translate.use('ar');
      localStorage.setItem('language', `${lang}`);
    }
  }
  setRtl(): void {
    document.getElementById('theme-opt')?.setAttribute('href', '../assets/css/style-rtl.min.css');
    this.LeftToRight = false;
  }
  setLtr(): void {
    document.getElementById('theme-opt')?.setAttribute('href', '../assets/css/style.min.css');
    this.LeftToRight = true;
  }
}
