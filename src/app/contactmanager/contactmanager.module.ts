import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
 
const routes: Routes = [
  { path: 'contactmanager', component: ContactmanagerAppComponent,
children: [
  {path: '', component: MainContentComponent}
]},
  { path: '**', redirectTo: 'contactmanager'}
  ];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ToolbarComponent, MainContentComponent, SidenavComponent],
  exports: [ToolbarComponent, MainContentComponent, SidenavComponent]
})
export class ContactmanagerModule { }
