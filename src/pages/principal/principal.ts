
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import {Pagina2Page} from '../index.paginas';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  // esta variable es para usarse en el html
  pagina2:any = Pagina2Page;

  constructor( private menuCtrl: MenuController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  navegarPagina() {
    // Aqui en codigo se usa directamente la clase
      this.navCtrl.push(Pagina2Page);
  }

  mostrarMenu() {
        this.menuCtrl.toggle();
  }

}
