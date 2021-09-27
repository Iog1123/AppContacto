import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public database: AngularFirestore) { }

 
  crearDato(data: any,path:string, id:string){
    const collection = this.database.collection(path)
    return collection.doc(id).set(data);
  }

  getDato(path:string, id:string){
    const collection = this.database.collection(path)
    return collection.doc(id).valueChanges();

  }

  deleteDato(path:string, id:string){
    const collection = this.database.collection(path)
    return collection.doc(id).delete();
  }

  updateDato(data: any, path: string, id: string){
    const collection = this.database.collection(path)
    return collection.doc(id).update(data);
  }
}
