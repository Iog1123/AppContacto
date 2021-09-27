import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Contacto } from 'src/app/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-agregarcontactos',
  templateUrl: './agregarcontactos.page.html',
  styleUrls: ['./agregarcontactos.page.scss'],
})
export class AgregarcontactosPage implements OnInit {
  
  contactos : Contacto={
    nombre: '',
    fono:'',
    idContacto:this.firestoreService.getIdSecurity(),
    idPropietario: ''
  }

  private path= '/contactos'
  constructor(private router: Router, private toastController: ToastController,public firestoreService: FirestoreService) { }

  ngOnInit() {
  }


  registrarContacto(){
     this.firestoreService.crearDato(this.contactos,this.path,this.contactos.idContacto)
     this.presentToast('Se ha registrado el contacto')
     this.router.navigate(['/menu'])
  }

  async presentToast(message: string, duration?: number){
    const toast= await this.toastController.create({
      message,
      duration:duration?duration:2000,
    
    }
     
    );

    toast.present();
  }
  
}
