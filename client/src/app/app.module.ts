//imports Angular functionality needed
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//imports our own custom components
import { AppComponent } from './app.component';
import { CampersComponent } from './campers/campers.component';
import { CamperListComponent } from './camper-list/camper-list.component';
import { CamperDetailComponent } from './camper-detail/camper-detail.component';
import { NewCamperComponent } from './new-camper/new-camper.component';
import { MaleComponent } from './male/male.component';
import { FemaleComponent } from './female/female.component';
import { CoedFemaleComponent } from './coed-female/coed-female.component';
import { CoedMaleComponent } from './coed-male/coed-male.component';
import { CoedComponent } from './coed/coed.component';

//sets up routes to access various components
const routes:Routes = [
	{ path: '', redirectTo: '/campers', pathMatch: 'full'},
	{ path: 'campers', component: CamperListComponent }, 
	{ path: 'camper/:id', component: CamperDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CampersComponent,
    CamperListComponent,
    CamperDetailComponent,
    NewCamperComponent,
    MaleComponent,
    FemaleComponent,
    CoedFemaleComponent,
    CoedMaleComponent,
    CoedComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RouterModule.forRoot(routes), 
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//export module
export class AppModule { }
