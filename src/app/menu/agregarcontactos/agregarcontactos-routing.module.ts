import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarcontactosPage } from './agregarcontactos.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarcontactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarcontactosPageRoutingModule {}
