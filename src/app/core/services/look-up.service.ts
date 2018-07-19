import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CONFIG } from '../../../environments/config';
import { RequestOptionsBuilder } from '../../core/utility/request-option-builder';
//import { ListItem } from '../../core/model/listItem';

@Injectable()
export class LookUpService {

   // configurationUrl = CONFIG.baseUrls.configuration;
    lookupUrl = CONFIG.baseUrls.lookup;
    requestOptions: RequestOptionsBuilder;
    constructor(private http: Http) {

        this.requestOptions = new RequestOptionsBuilder();
    }
    // items: ListItem[] = [{
    //     key: "1",
    //     value: "HD Video Player"
    // }, {
    //     key: "2",
    //     value: "HD Video Player"
    // }];
    getUtilityItems(): Observable<Array<any>> {
      
        var url = this.lookupUrl + "/utilities";
        let requestOption = this.requestOptions.withDefault().build()
        return this.http.get(url, requestOption)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
    }

}
