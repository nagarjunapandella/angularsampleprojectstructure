import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuyComponent} from './buy.component';
import { BuyModuleRouting } from './buy.routes';

@NgModule({
    imports: [
        CommonModule,
        BuyModuleRouting
    ],
    declarations: [
     BuyComponent
    ],
    exports: [BuyComponent],
    providers: [
       ]
})

export class BuyModule { }