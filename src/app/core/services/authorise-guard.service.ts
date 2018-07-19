// import { Injectable } from '@angular/core';
// import {
//     CanActivate,
//     CanActivateChild,
//     CanLoad,
//     ActivatedRouteSnapshot,
//     RouterStateSnapshot,
//     Route
// } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// //import { BrowserStorageService } from '../component/home/browserstorage'

// @Injectable()
// export class AuthoriseGuardService implements CanActivate, CanActivateChild, CanLoad {
//   //browserStorage: BrowserStorageService = new BrowserStorageService();
//   constructor(private _browserStorageService: BrowserStorageService) { }

//   checkAuthorization(): Observable<boolean> | Promise<boolean> | boolean
//   {
//       if (this._browserStorageService.isAuthenticatedUser() == true) {
//           return true;
//       }
//       else {
//           return false;
//       }
//   }

//   canLoad(route: Route):Observable<boolean>|Promise<boolean>|boolean
//   {
//       return this.checkAuthorization();
//   }

//   canActivateChild(route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean
//   {      
//       return this.checkAuthorization();
//   }

//   canActivate(route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean
//   {   
//       return this.checkAuthorization();
//   }

// }
