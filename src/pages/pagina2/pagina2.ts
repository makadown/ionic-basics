import { Component } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';

import {Pagina3Page} from '../index.paginas';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
 
  pagina3:any = Pagina3Page;

  mutantes:any[] = [
    { nombre: 'Magneto', poder: 'Controlar metales'},
    { nombre: 'Wolverino', poder: 'Regeneracion acelerada'},
    { nombre: 'Profesor X', poder: 'Leer la mente'},
    { nombre: 'Gambito', poder: 'Cargar objetos inanimados con energia'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  irAPagina3(mutante: any) {
           console.log(mutante);
           this.navCtrl.push(Pagina3Page, { 'mutante': mutante } );
  }

}
