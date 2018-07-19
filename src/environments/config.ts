import { environment } from './environment';
import { Headers, Http, Response, RequestOptions, RequestMethod } from '@angular/http';

export let CONFIG = {

    baseUrls: {
        sell: `${environment.apiUrl}/api/buy`,
        buy: `${environment.apiUrl}/api/buy`,
        rent: `${environment.apiUrl}/api/rent`,
        core: `${environment.apiUrl}/api/core`,  /* non functional related resource methods*/
        common: `${environment.apiUrl}/api/common`,  /* funcational resources and used my more than one module*/
        lookup: `${environment.apiUrl}/api/lookup`,
        
    },

    enviroment: `${environment.envName}`,
    
    pagination: {
        pageSize: 25
    }
    
    //httpOptions: {
    //    options: new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) }),
    //}

}