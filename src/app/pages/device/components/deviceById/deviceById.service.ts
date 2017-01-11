import { Injectable } from '@angular/core';
import { Http,HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DeviceByIdService {

  constructor (private http: Http) {}
     // private instance variable to hold base url
     private mainUrl = 'http://localhost:4123/'; 
    private headers: Headers;

     // Fetch all existing comments
     getDeviceById(uuid) {

        this.headers = new Headers();

        this.headers.append('Accept' , 'application/json');
        // this.headers.append('Authorization', values);  
         this.headers.append('Content-Type', 'application/json');  

         // ...using get request
         return this.http.get(this.mainUrl + 'devices/867218cc-e7a9-4e30-8f00-3eb871d77852',  {headers: this.headers})
                        // ...and calling .json() on the response to return data
                         .map((res: Response) => res.json())
                         //...errors if any
                         .catch(this.handleError);

     }handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
