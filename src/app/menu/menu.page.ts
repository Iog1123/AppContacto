import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

private path = '/contactos'

Contactos : Contacto []= [];

  constructor(public firestoreService: FirestoreService) { 
  
  }

  ngOnInit() {
    this.getContactos();
  }

  getContactos(){
    this.firestoreService.getAllContactos<Contacto>(this.path).subscribe( res => {
    this.Contactos = res;
    })
  }

  borrarContacto(contacto: Contacto){
    this.firestoreService.deleteDato(this.path,contacto.idContacto);
  }

  

}
