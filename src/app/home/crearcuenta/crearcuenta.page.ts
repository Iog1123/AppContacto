import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuarios } from 'src/app/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {

nuevoUsuario: Usuarios = {
    nombre: '',
    email: '',
    password: '',
    id : this.firestoreService.getIdSecurity()
};

private path= 'Usuarios/';

  constructor(private router: Router,private toastController: ToastController,public firestoreService: FirestoreService) { }


  ngOnInit() {

  }

  registrarNuevaCuenta(){
    this.firestoreService.crearDato(this.nuevoUsuario,this.path,this.nuevoUsuario.id)
    this.presentToast("El usuario ha sido registrado!")
    this.router.navigate(['/home']);
    
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
