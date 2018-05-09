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
    NewCamperComponent
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
export class AppModule { }
