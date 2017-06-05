import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app works!';
  user:register;
   constructor(){
    this.user=
    {
   firstname:"",
   lastname:"", 
   username:"", 
   email:"", 
   mobile:undefined, 
   password:"", 
   gender:"", 
  // image:any;
   empId:"",
   dob:""
    }
  }
  ngOnInit(){
    
  }
  registeruser(user){
   
    console.log(user);
  }
}
export class register {
firstname:String; 
lastname:String; 
username:String; 
email:String; 
mobile:Number; 
password:String; 
gender:String; 
//image:any;
empId:String;
dob:String
}