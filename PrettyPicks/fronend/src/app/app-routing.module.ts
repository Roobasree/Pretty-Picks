import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { SignupComponent } from './signup/signup.component';
import { KurtiComponent } from './kurti/kurti.component';
import { KurtaSetComponent } from './kurta-set/kurta-set.component';
import { SareeComponent } from './saree/saree.component';
import { DressesComponent } from './dresses/dresses.component';
import { KurtiDetailsComponent } from './kurti-details/kurti-details.component';
import { authGuard } from './auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes= [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'sign-up', component:SignupComponent},
  {path:'login', component:LoginUserComponent},
  {path:'kurti', component:KurtiComponent},
  {path:'kurta-set', component:KurtaSetComponent},
  {path:'saree', component:SareeComponent},
  {path:'dresses', component:DressesComponent},
  {path:'kurti/:id', component: KurtiDetailsComponent},
  {path:'orders', component:OrdersComponent},
  {path:'cart', component:CartComponent}
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
