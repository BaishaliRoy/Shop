import { UserServicesService } from './services/user-services.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2'
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BootstpNavBarComponent } from './bootstp-nav-bar/bootstp-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactFormReactiveComponent } from './directives-example/contact-form-reactive.component';
import { MyCustomDiectiveDirective } from './my-custom-diective.directive';
import { ReactiveFormSignupComponent } from './reactive-form-signup/reactive-form-signup.component';
import { HttpExampleComponent } from './http-example/http-example.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstpNavBarComponent,
    HomeComponent,
    ProductsComponent,
    ProductsCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ContactFormComponent,
    ContactFormReactiveComponent,
    MyCustomDiectiveDirective,
    ReactiveFormSignupComponent,
    HttpExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'products-cart', component: ProductsCartComponent},
      {path: 'check-out', component: CheckOutComponent},
      {path: 'order-success', component: OrderSuccessComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin/admin-products', component: AdminProductsComponent},
      {path: 'admin/admin-orders', component: AdminOrdersComponent},
    ])
  ],
  providers: [ UserServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
