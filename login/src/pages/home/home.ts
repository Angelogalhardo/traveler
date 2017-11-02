import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { RecuperarContaPage } from '../recuperar-conta/recuperar-conta';
import { InicioPage } from '../inicio/inicio';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

usuario: any = {
nomeUsuario: '',
senha:''
};
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http : Http) {}
      cadastro(){
        this.navCtrl.push(CadastroPage);
      }
      recuperar(){
        this.navCtrl.push(RecuperarContaPage);
      }

      inicio(){
        var usuario = JSON.stringify(this.usuario);
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });

        this.http.post("https://carona-hfernan.c9users.io/login", usuario, options).subscribe(data =>{
          this.navCtrl.push(InicioPage)
        }, error =>{
        let alert = this.alertCtrl.create({
          title: 'Usuário ou senha incorreta',
          subTitle: 'Verifique as informações',
          buttons: ["OK"]
        });
        alert.present();
        });
      }
}
