import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder} from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  usuario: string = "";
  Password: string= "";
  
  formularioLogin = this.fb.group({
    nombre: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
    Password: ["",[Validators.required,Validators.maxLength(4),Validators.minLength(4)]]
  });

  constructor(public fb: FormBuilder, 
    public alertController: AlertController, private navCtrl: NavController, private router:Router,private helper:HelperService ) {   }

  ngOnInit() {
  }
  
  registro(){
    this.router.navigateByUrl("registro");
  }

  onLogin(){

    if (this.usuario == "") {
      this.helper.showAlert("Debe ingresar un usuario","Error");
      return;
    }
    if (this.Password == "") {
      alert("Debe ingresar una contraseña");
      return;
    }

    if (this.usuario == this.usuario && this.Password == this.Password) {
      this.router.navigateByUrl('camara');
    }else{
      alert("Usuario o contraseña incorrecta.")
    }

    
    
  }
  


}