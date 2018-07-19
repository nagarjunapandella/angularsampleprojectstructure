import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopnavComponent } from './core/topnav/topnav.component';
import { HomeComponent } from './core/home/home.component';
import {AppRoutingModule} from './app.routes';
//  import { SellComponent } from './sell/sell.component';
import {SellModule} from './sell/sell.module';
import{BuyModule} from './buy/buy.module';
import { FooterComponent } from './core/footer/footer.component';
import {ToastyModule} from 'ng2-toasty';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HomeComponent,
    FooterComponent
    //  SellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   SellModule,
   BuyModule,
    ToastyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
