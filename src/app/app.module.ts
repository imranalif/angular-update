import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//import{Router} from '@angular/router';

import {UserService} from 'src/app/shared/user.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { UserComponent } from './user/user.component';
import {MatTableModule} from '@angular/material/table'; 
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UpdateUserComponent } from './user/update-user/update-user.component'; 


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule
    //Router,
    
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
