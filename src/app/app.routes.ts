import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import {SellComponent} from '../app/sell/sell.component';
const routes: Routes = [
    {
        path: "", redirectTo: "home", pathMatch: "full"
    },
    {
        path: "home", component: HomeComponent,
        canActivate: [], canActivateChild: [], canLoad: []
    },
    {
        path: "sell", component: SellComponent,
        //canActivate: [], canActivateChild: [], canLoad: []
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}