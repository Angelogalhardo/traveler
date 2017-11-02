import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-recuperar-conta',
  templateUrl: 'recuperar-conta.html'

})
export class RecuperarContaPage {

email : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http : Http) {}
  home(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarContaPage');
  }

 recuperar (){
   var headers = new Headers();
   headers.append('Accept', 'application/json');
   headers.append('Content-Type', 'application/json' );
   let options = new RequestOptions({ headers: headers });

   this.http.put("https://carona-hfernan.c9users.io/redefinirSenha/" + this.email, options).subscribe(data =>{
   let alert = this.alertCtrl.create({
        title: 'E-mail com sua nova senha foi enviado !',
        buttons: ["OK"]
      });
      alert.present();
      }, error =>{
        let alert = this.alertCtrl.create({
        //title: 'E-mail não cadastrado !',
        title:  this.email,
        buttons: ["OK"]
      });
      alert.present();
   });
   }
}
