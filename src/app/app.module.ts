import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { SWelcomeComponent } from './s-welcome/s-welcome.component';
import { SellerRegistrationService } from './seller-registration.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { SloginComponent } from './slogin/slogin.component';
import { SplistComponent } from './splist/splist.component';
import { SpupdateComponent } from './spupdate/spupdate.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EproductComponent } from './eproduct/eproduct.component';
import { UsignComponent } from './usign/usign.component';
import { ULoggedComponent } from './u-logged/u-logged.component';
import { UproductsComponent } from './uproducts/uproducts.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { UuserComponent } from './uuser/uuser.component';
import { CorderComponent } from './corder/corder.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerRegistrationComponent,
    SWelcomeComponent,
    WelcomeComponent,
    UloginComponent,
    SloginComponent,
    SplistComponent,
    SpupdateComponent,
    AddproductComponent,
    EproductComponent,
    UsignComponent,
    ULoggedComponent,
    UproductsComponent,
    CartdetailsComponent,
    OrderdetailsComponent,
    UuserComponent,
    CorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SellerRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
