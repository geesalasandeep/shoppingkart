import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient,
              public route : Router) { }

  onRegister(userDetails){
    return this.http.post<any>(`${environment.baseURL}/api/users/register`,userDetails)
  }

  onLogin(cred){
    return this.http.post<any>(`${environment.baseURL}/api/users/login`,cred)  
  }

  getUserDetails(){
    const userDetails = JSON.parse(localStorage.getItem('userDetails'))
    if(userDetails){
      return userDetails;
    }
  }

  isAdmin(){
    const userDetails = this.getUserDetails();
    if(userDetails){
      return true;
    }
  }

  isUser(){
    if(this.getUserDetails().role==='user'){
      return true
    }
  }

  isLogin(){
    if(this.getUserDetails()){
      return true
    }
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/login'])
  }
  getToken(){
    const userDetails = this.getUserDetails()
    if (userDetails && userDetails.token ){
      console.log(userDetails.token);
      
      return userDetails.token;
    }
  }



}
