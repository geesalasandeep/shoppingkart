  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SandeepComponent } from './sandeep/sandeep.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent,
data : {role : ['admin','user']},
canActivate : [AuthGuard]},
  {path:'add-product',component:AddProductComponent,
  data : {role : ['admin']},
  canActivate : [AuthGuard]},
  {path: 'newsapi',component:NewsapiComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path : 'sandeep',component:SandeepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
