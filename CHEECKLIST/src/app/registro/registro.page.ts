import { Component, OnInit } from '@angular/core';
import { Comuna } from 'src/app/models/comuna';
import { Region } from 'src/app/models/region';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { LocationService } from 'src/app/services/location.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  Usuario:string = '';
  Password:string='';
  regiones:Region[]=[]; 
  comunas:Comuna[]=[];
  regionSel:number = 0;
  comunaSel:number = 0;
  seleccionComuna:boolean = true;

  constructor(
              private storage:StorageService,
              private helper:HelperService,
              private locationService:LocationService,
              private router:Router
            ){}

  ngOnInit() {
    this.cargarRegion();
  }

  async cargarRegion(){
    const req = await this.locationService.getRegion();
    this.regiones = req.data;
  }
  async cargarComuna(){
    this.seleccionComuna = false;
    const req = await this.locationService.getComuna(this.regionSel);
    this.comunas = req.data;
  }

  registro(){
    if (this.Usuario == '') {
      this.helper.showAlert("Debe ingresar el nombre","Error");
      return;
    }
    if (this.Password == '') {
      this.helper.showAlert("Debe ingresar una contraseña","Error");
      return;
    }

    var usuario = [{
      correo:this.Usuario,
      contrasena:this.Password
    }];

    this.storage.guargarUsuario(usuario);
    this.helper.showAlert("Usuario registrado correctamente.","Información");
    this.router.navigateByUrl('login');
    
  }

}
  
  
