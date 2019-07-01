import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
//import{Router} from '@angular/router'
import {UserService} from 'src/app/shared/user.service'
import {IUser} from 'src/app/shared/user.model'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
myForm:FormGroup;
users:IUser[]=[];

user:IUser={
  id:null,
  firstName:null,
  lastName:null,
  phone:null,
  email:'',
  address:null,
  password:null,
  confirmPassword:null
}

  constructor(private fb:FormBuilder,private userService:UserService,private _route:ActivatedRoute) { }

  ngOnInit() {
    
    this.myForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(5)]],
      lastName:[''],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(5)]],
      address:[''],
      password:['',[Validators.required,Validators.minLength(5)],
      
    ]
    })
    this._route.paramMap.subscribe(parameterMap=>{
      const Id= +parameterMap.get('id');
      this.getUser(Id);
      console.log(this.user.id)
      });
      
      
  }
  
  getUser(id:number){
    if (id===0)
    this.user={
      id:null,
      firstName:null,
      lastName:null,
      phone:null,
      email:'',
      address:null,
      password:null,
      confirmPassword:null
    }
    else
     this.user=Object.assign({},this.userService.getUserId(id));
     this.myForm.patchValue({
       firstName:this.user.firstName,
       lastName:this.user.lastName,
       phone:this.user.phone,
       email:this.user.email,
       address:this.user.address,
       password:this.user.password,
       confirmPassword:this.user.confirmPassword
     })
     console.log(this.user);
     
   
  }
  /*insertUser(user:any){
    this.users.push(
    
    {firstName:user.firstName,
      lastName:user.lastName,
      phone:user.phone,
      email:user.email,
      address:user.address,
      password:user.password,
      confirmPassword:user.confirmPassword}
    )
  }*/
  onSubmit(){
    //console.log(this.myForm.value);
    //this.users.push(this.myForm.firstName);
    // let userData = {
    //   'firstname': this.myForm.value.firstName,
    //   'lastname': this.myForm.value.lastName,
    //   'phone':this.myForm.value.phone,
    //   'email': this.myForm.value.email,
    //   'address': this.myForm.value.address,
    //   'password': this.myForm.value.password
    // };
    //console.log(this.users);
   //alert (this.users.push(this.myForm.value));
    //this.myForm.reset();
//this.users.push(user);
//if(this.myForm.value.id==null)
this.userService.save(this.user);
//else
//this.userService.updateUser(this.myForm.value);
//alert (this.users.push(this.myForm.value));
//console.log(this.users);
//this.router.navigate(['/user-details'])

  }
 /* getUser():IUser[]{
    return this.users;
  }*/
  

  
}
