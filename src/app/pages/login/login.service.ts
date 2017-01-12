// Imports
import { Injectable }     from '@angular/core';
import { Http,HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private mainUrl = 'http://localhost:4123/'; 
    private headers: Headers;

     // Fetch all existing comments
     postLogin(property) : Observable<Comment[]> {

        //   let body = JSON.stringify(property);
        //   let params = 'json=' + body;

        //   let body = JSON.stringify({var1:"test",var2:"123"});
        // let values = JSON.stringify({ 'user': 'centilio', 'pass': 'password' });

        let values = 'Basic ' + btoa(property.emailid + ':' + property.password);

        this.headers = new Headers();

        this.headers.append('Accept' , 'application/json');
        this.headers.append('Authorization', values);  
         this.headers.append('Content-Type', 'application/json');  

              // let authHeaders = new Headers({ 'user': 'centilio', 'pass': 'password' });
        // headers.append( 'Content-Type', 'application/json' );
        // let options = new RequestOptions({ headers: this.headers });

         // ...using get request
         return this.http.get(this.mainUrl + 'login',  {headers: this.headers})
                        // ...and calling .json() on the response to return data
                         .map((res: Response) => {
                             if(res.status < 200 || res.status >= 300) {
                                 console.log("if");
                                 
                                throw new Error('This request has failed ' + res.status);
                                } 
                                // If everything went fine, return the response
                                else {
                                    console.log("else");
                                    
                                    return res.json();
                                }
                         })
                         //...errors if any
                         .catch(this.handleError);
     }handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
