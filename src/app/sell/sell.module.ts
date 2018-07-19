import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SellComponent} from './sell.component';
import { SellModuleRouting } from './sell.routes';

@NgModule({
    imports: [
        CommonModule,
        SellModuleRouting
    ],
    declarations: [
     SellComponent
    ],
    exports: [SellComponent],
    providers: [
       ]
})

export class SellModule { }