import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IndexComponent } from './component/index/index.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { ThemeControlComponent } from './component/theme-control/theme-control.component';
import { FooterComponent } from './component/footer/footer.component';
import { AcceptComponent } from './component/accept/accept.component';
import { AcceptFooterComponent } from './component/accept-footer/accept-footer.component';

@NgModule({
  declarations: [
    AppComponent,

    IndexComponent,
    HeaderComponent,
    ThemeControlComponent,
    FooterComponent,
    AcceptComponent,
    AcceptFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}
