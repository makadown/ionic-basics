import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import {PrincipalPage, Pagina3Page,
  ModalPage,
  Ajustes2Page,
  AjustesPage,
  
  TabsPage,
  Pagina2Page } from '../pages/index.paginas';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,PrincipalPage,
    Pagina3Page,
    ModalPage,
    Ajustes2Page,
    AjustesPage,
    
    TabsPage,
    Pagina2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Atrás'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    PrincipalPage,
    Pagina3Page,
  ModalPage,
  Ajustes2Page,
  AjustesPage,
  
  TabsPage,
  Pagina2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
