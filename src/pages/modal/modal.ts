import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre: String = '';
  edad: number= 0;
/* Este es un modal, no funcionara con NavController (pop), 
por eso se usa ViewController en su lugar.*/
  constructor( public viewCtrl: ViewController,
    public navParams: NavParams) {
    this.nombre = this.navParams.get('nombre');
    this.edad = this.navParams.get('edad');
    console.log(this.nombre, this.edad);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrar_con_parametros() {
    const data = {
      nombre: 'pop',
      edad: 41,
      coords: {
        lat: 32.6034413,
        lon: -115.3881966
      }
    };
    this.viewCtrl.dismiss(data);
  }

  cerrar_sin_parametros() {this.viewCtrl.dismiss();}
}
