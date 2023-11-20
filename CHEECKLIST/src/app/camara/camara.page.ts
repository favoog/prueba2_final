import { Component, OnInit, ViewChild, VERSION } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
//QR
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  ngVersion = VERSION.full;
  @ViewChild('scanner', { static: true })


  hasDevices!: boolean;
  hasPermission!: boolean;
  qrResultString!: string;
  
  availableDevices!: MediaDeviceInfo[];
  currentDevice!: MediaDeviceInfo;

  //QR
  parametroIdEmpleado:number | undefined;
  resultadoScan:any='';

  imagenes:any[] = [];
  

  constructor(private navCtrl: NavController, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }

  async takePhoto(){

    var cSourse = CameraSource.Prompt;

    if ((await Camera.checkPermissions()).camera == 'granted') {
      const image = await Camera.getPhoto({resultType: CameraResultType.Uri,
          quality:100,
          height:1024,
          width:1024,
          source:cSourse,
          presentationStyle:'popover',
          promptLabelCancel: 'Cancelar',
          promptLabelPhoto: 'Desde la galeria',
          promptLabelPicture: 'Desde la camara',
          promptLabelHeader: 'Seleccione'
      });

      if (image.webPath) {
            var blob = (await fetch(image.webPath)).blob();
          this.imagenes.unshift({fname:'foto'+ image.format,src:image.webPath,file:blob})
      }

      console.log('IMAGENES GUARDADAS ===>', this.imagenes);
      

                    
    }
  }

  handleQrCodeResult(resultString: string) {
    console.log('Result:   ', resultString);
    const componentes = resultString.split(',');
    const datos: { [key: string]: string } = {};
    componentes.forEach(componente => {
      const [nombre, valor] = componente.split(':');
      datos[nombre.trim()] = valor.trim();
    });
    this.navCtrl.navigateForward('usuarios');
    localStorage.setItem('profesor',JSON.stringify(datos));
    console.log('Datos guardados en el localStorage:', datos);

  }



//QR

async scan(){
  this.resultadoScan = (await  BarcodeScanner.scan()).code;
  console.log("Resultado scan",JSON.parse(this.resultadoScan));
}


}

