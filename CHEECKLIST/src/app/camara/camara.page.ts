import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  imagenes:any[] = [];
  parametroIdEmpleado:number | undefined;
  resultadoScan:any='';

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    defineCustomElements(window);
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
          promptLabelPhoto: 'Desde la camara',
          promptLabelPicture: 'Desde la galeria',
          promptLabelHeader: 'Seleccione'
      });

      if (image.webPath) {
            var blob = (await fetch(image.webPath)).blob();
          this.imagenes.unshift({fname:'foto'+ image.format,src:image.webPath,file:blob})
      }

      console.log('IMAGENES GUARDADAS ===>', this.imagenes);
      

                    
    }
  }

  async scan(){
    this.resultadoScan = (await  BarcodeScanner.scan()).code;
    console.log("Resultado scan",JSON.parse(this.resultadoScan));
  }


}
