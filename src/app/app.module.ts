import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';

import { RouterModule, Routes } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TableComponent } from 'angular2-datagrid/src/app/demo';
import { UploadComponent } from './upload/upload.component';
//import { NgGridModule } from '../../node_modules/angular2-grid';



const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'pics', component: PicturesComponent },
  { path: 'upload', component: UploadComponent },
  
  {
    path: 'pictures',
    component: PicturesComponent,
    data: { title: 'Pictures' }
  },
  
  {
    path: 'signin',
    component: SigninComponent,
    data: { title: 'Signin' }
  },
  { path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'upload',
    redirectTo: '/upload',
    pathMatch: 'upload'
  },

  { path: '**', component: PicturesComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    PicturesComponent,
    NavbarComponent,
    CarouselComponent,
    UploadComponent
    //NgGridModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'pictures',
        component: PicturesComponent        
      },
      {
        path: 'carousel',
        component:  CarouselComponent
      },
      {
        path: 'upload',
        component:  UploadComponent
      },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
