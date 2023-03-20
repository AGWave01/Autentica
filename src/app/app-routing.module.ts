import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestComputerComponent } from './request-computer/request-computer.component';
import { EquipmentRequestComponent } from './equipment-request/equipment-request.component';

const routes: Routes = [
  { path: 'request-computer', component: RequestComputerComponent },
  { path: 'existing-requests', component: EquipmentRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
