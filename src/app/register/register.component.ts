import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  message: any;
  error: string;

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  } 
  onSubmit(form:NgForm){
    this.isLoading = true;
    
    this.auth.onRegister(form.value).subscribe((res)=>{
    console.log(res);

      this.isLoading = false;
      this.message = res.message;
      form.reset();

    },err => {
      this.isLoading = false;
      this.error = " something went worng"
    })
  }

}
