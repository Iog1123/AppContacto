import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarcontactosPageRoutingModule } from './agregarcontactos-routing.module';

import { AgregarcontactosPage } from './agregarcontactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarcontactosPageRoutingModule
  ],
  declarations: [AgregarcontactosPage]
})
export class AgregarcontactosPageModule {}
