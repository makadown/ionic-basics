import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { ModalPage } from '../index.paginas';


@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  activarPrincipal(){
    // cambiar a otro tab, que no es lo mismo que abrir una pagina (push)
    this.navCtrl.parent.select(0);
  }

  activarModal() {
    let modal= this.modal.create( ModalPage, { nombre: 'Mario', edad: 38 } );
    modal.present();
    modal.onDidDismiss(parametros=>{
      if (parametros) {
      console.log('Datos de modal');
      console.log(parametros);
      }
    });
  }

}
