import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  error: string;
  isLoading= false;
  message: string;

  constructor(private prod : ProductService) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    console.log(form.value);
    
    this.isLoading = true;
    this.prod.addProduct(form.value).subscribe((res)=>{
      console.log(res);
      
      this.isLoading = false;
      if(!res.error){
        this.message = 'products added Successfully';
        setTimeout(() => {
          this.message = '';
        }, 4000);
      }
      else{
        this.error = "Failed to Add Product";
      }
    }, err =>{
      this.isLoading = false;
      this.error = 'server error';
    })
    
  }

}
