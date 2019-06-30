import { Injectable } from '@angular/core';
import {IUser} from 'src/app/shared/user.model';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myForm:FormGroup;
  user:IUser;
  private listUser:IUser[]=[
    {id:1,firstName:'imranfgh',lastName:'khan',phone:'0178255',email:'imra@gmail.com',address:'moragacha',password:'123456',confirmPassword:'123456'},
    {id:2,firstName:'alif',lastName:'khan',phone:'0178255',email:'imra@gmail.com',address:'moragacha',password:'123456',confirmPassword:'123456'} 
   ];
   getUser():IUser[]{
     return this.listUser;
   }
   save(user:IUser){
     return this.listUser.push(user)
   }
   getUserId(id:number){
    return this.listUser.find(e=>e.id===id);
   }
   delete(id:number,data){
const i=data.findIndex(e=>e.id===id)
if(i!= -1){
  data.splice(i,1);
 
}
   }
   updateUser(id:number){
     firstName:this.user.firstName;
     lastName:this.user.lastName;
     phone:this.user.phone;
     email:this.user.email;
     address:this.user.address;
     password:this.user.password;
     confirmPassword:this.user.confirmPassword
   }
  constructor(private fb:FormBuilder) {
    this.myForm=this.fb.group({
      id:[null],
      firstName:['',[Validators.required,Validators.minLength(5)]],
      lastName:[''],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(5)]],
      address:[''],
      password:['',[Validators.required,Validators.minLength(5)],
      
    ]
    })
   }
   populateForm(user){
    this.myForm.setValue(user);
  }
}
