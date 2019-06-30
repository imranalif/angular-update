import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent} from './user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';


const routes: Routes = [
  
  {path:'user',component: UserComponent},
  {path:'create-user',component: CreateUserComponent},

   {path:'edit/:id',component: CreateUserComponent},
  {path:'user-details',component: UserDetailsComponent},
  {path:'',redirectTo:'create-user', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
