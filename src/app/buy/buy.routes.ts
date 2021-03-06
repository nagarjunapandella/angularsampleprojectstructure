import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuyComponent} from '../../app/buy/buy.component';

const routes: Routes = [
  {
    path:"", redirectTo:"sell", pathMatch:"full"
  },
  {
    path:"buy", component:BuyComponent, canActivate:[], canActivateChild:[], canLoad:[]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuyModuleRouting {


}