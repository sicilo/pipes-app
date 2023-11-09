import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

// Configuracion del locale de la app
import localeFrCA from '@angular/common/locales/fr-CA';
import localeEnGB from '@angular/common/locales/en-GB';
import localeEsCO from '@angular/common/locales/es-CO';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsCO);
registerLocaleData(localeFrCA);
registerLocaleData(localeEnGB);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PrimeNgModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
