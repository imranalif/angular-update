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
      id:null,
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
      //console.log(this.user.id)
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
       id:id,
       firstName:this.user.firstName,
       lastName:this.user.lastName,
       phone:this.user.phone,
       email:this.user.email,
       address:this.user.address,
       password:this.user.password,
       confirmPassword:this.user.confirmPassword
     })
    // console.log(this.user);
     
   
  }
  
  onSubmit(user){
   
   
//this.users.push(user);
//if(this.myForm.value.id==null)
            this.userService.save(this.myForm.value);

console.log(this.users);


  }
 

  
}
