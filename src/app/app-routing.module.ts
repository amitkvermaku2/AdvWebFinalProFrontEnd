import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { SWelcomeComponent } from './s-welcome/s-welcome.component';
import { SellerRegistrationService } from './seller-registration.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { SloginComponent } from './slogin/slogin.component';
import { UsignComponent } from './usign/usign.component';
import { ULoggedComponent } from './u-logged/u-logged.component';

const routes: Routes = [
{component: SWelcomeComponent, path:'slogged'},
{component: SellerRegistrationComponent, path:'sregister', },
{component: WelcomeComponent, path:'' },
{component: UloginComponent, path:'ulogin' },
{component: SloginComponent, path:'slogin' },
{component: UsignComponent, path:'usignup' },
{component: ULoggedComponent, path:'ulogged' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
