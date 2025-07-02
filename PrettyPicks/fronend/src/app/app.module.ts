import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { KurtiComponent } from './kurti/kurti.component';
import { KurtaSetComponent } from './kurta-set/kurta-set.component';
import { SareeComponent } from './saree/saree.component';
import { DressesComponent } from './dresses/dresses.component';
import { KurtiDetailsComponent } from './kurti-details/kurti-details.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginUserComponent,
    HomeComponent,
    HeaderComponent,
    KurtiComponent,
    KurtaSetComponent,
    SareeComponent,
    DressesComponent,
    KurtiDetailsComponent,
    OrdersComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
