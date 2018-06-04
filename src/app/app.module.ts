import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ContactmanagerAppComponent } from './contactmanager/contactmanager-app.component';
import { ContactmanagerModule } from './contactmanager/contactmanager.module';


const routes: Routes = [
{ path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule'},
{ path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
{ path: '**', redirectTo: 'contactmanager'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactmanagerAppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ContactmanagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
