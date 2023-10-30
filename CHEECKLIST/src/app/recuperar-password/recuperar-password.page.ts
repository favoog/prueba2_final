import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {
  usuario: string="";
  Password: string="";
  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }
  async resetPassword() {
    // Verifica si el nombre de usuario existe en localStorage
    const storedUser = localStorage.getItem('usuario');

    if (storedUser) {
      // Actualiza la contraseña en localStorage
      const user = JSON.parse(storedUser);
      user.password = this.Password;
      localStorage.setItem('usuario',JSON.stringify(user));

      // Muestra un mensaje de éxito o redirige al usuario a la página de inicio de sesión
      const alert = await this.alertController.create({
        header:'Datos correctos',
        message: 'Su contraseña se cambio con exito',
        buttons: ['Aceptar']
      });
      await alert.present();
      this.navCtrl.navigateRoot('login');
    } else {
      // Muestra un mensaje de error si el nombre de usuario no existe
      const alert = await this.alertController.create({
        header:'Datos incorrectos',
        message: 'Su nombre de usuario esta incorrecto',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }

}