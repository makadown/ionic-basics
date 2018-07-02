import { TabsPage, Ajustes2Page } from './../pages/index.paginas';
import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabs = TabsPage;
  ajustes2 = Ajustes2Page;

  rootPage:any = TabsPage; // HomePage;

  constructor( private menuCtrl: MenuController,
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(pagina:any) {
this.rootPage = pagina;
this.menuCtrl.close();
  }

  closeMenu(){}
}

