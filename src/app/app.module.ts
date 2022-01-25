import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SearchPipe } from './search.pipe';
import { AuthorizationInterceptor } from './authorization.interceptor';
import { SandeepComponent } from './sandeep/sandeep.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    SpinnerComponent,
    AddProductComponent,
    NewsapiComponent,
    RegisterComponent,
    LoginComponent,
    SearchPipe,
    SandeepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthorizationInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
