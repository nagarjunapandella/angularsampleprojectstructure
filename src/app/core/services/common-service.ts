import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig } from 'ng2-toasty';


@Injectable()
export class CommonService {

    constructor(private _toastService: ToastyService) {

    }

    notifyError(message: string) {
        this._toastService.error({
            title: "Error",
            msg: message,
            showClose: true
        });
    }

    notifyWarning(message: string) {
        this._toastService.warning({
            title: "Warning",
            msg: message,
            showClose: true
        });
    }

    notifySuccess(message: string) {

        this._toastService.success({
            title: "Success",
            msg: message,
            showClose: true,
            timeout: 5000
        });
    }

    // logError(message: string) {
    //     this.notifyError(message);
    //     this._loggerService.logError(message);
    // }

}