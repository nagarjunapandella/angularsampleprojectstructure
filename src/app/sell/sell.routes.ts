import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SellComponent} from '../../app/sell/sell.component';

const routes: Routes = [
  {
    path:"", redirectTo:"sell", pathMatch:"full"
  },
  {
    path:"sell", component:SellComponent, canActivate:[], canActivateChild:[], canLoad:[]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SellModuleRouting {


}