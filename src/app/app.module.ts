import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentRequestComponent } from './equipment-request/equipment-request.component';
import { RequestComputerComponent } from './request-computer/request-computer.component';
import { RequestListComponent } from './requests-list/requests-list.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: RequestListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EquipmentRequestComponent,
    RequestListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
