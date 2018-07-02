import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
    selector: 'page-pagina3',
    templateUrl: 'pagina3.html',
  })
  export class Pagina3Page {

    mutante:any = {};
  
    constructor(private navParams: NavParams, 
                private navController: NavController ) {
      console.log(navParams);
      this.mutante = this.navParams.get('mutante');  
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad Pagina3Page');
    }

    irAtras() {
      this.navController.pop();
    }

    irRoot() {
      this.navController.popToRoot();
    }
  
  }
  