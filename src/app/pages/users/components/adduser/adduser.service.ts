import { Injectable } from '@angular/core';
import { Http,HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AdduserService {

  constructor (private http: Http) {}
     // private instance variable to hold base url
     private mainUrl = 'http://localhost:4123/'; 
    private headers: Headers;

     // Fetch all existing comments
     addUser(userDetails) {

         let body = JSON.stringify(userDetails);
        this.headers = new Headers();

        this.headers.append('Accept' , 'application/json');
        // this.headers.append('Authorization', values);  
         this.headers.append('Content-Type', 'application/json');  

         // ...using get request
         return this.http.post(this.mainUrl + 'clients', body, {headers: this.headers})
                        // ...and calling .json() on the response to return data
                         .map((res: Response) => res)
                         //...errors if any
                         .catch(this.handleError);

     }handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}