import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {

  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {
  }
  registrarNuevaCuenta(){
    const data={
      nombre: 'juanito cantillana',
      email:'juanDeldiablo@gmail.com',
      password: '2323'
    };

    const path= 'Usuarios/';
    const id='0001';
    this.firestoreService.crearDato(data,path,id)
  }
}
