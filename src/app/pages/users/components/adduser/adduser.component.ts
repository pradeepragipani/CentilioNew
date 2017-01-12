import { Component, ViewEncapsulation } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http,HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AdduserService} from './adduser.service';

// import './adduser.loader.ts';

@Component({
  selector: 'adduser-component',
  encapsulation: ViewEncapsulation.None,
  template: require('./adduser.html'),
  styles: [require('./adduser.scss')],
  providers: [AdduserService]
})

export class Adduser {
  public adduserContent:string = '<p>Hello Add User</p>';
  public config = {
    uiColor: '#F0F3F4',
    height: '600'
  };
  public formDevice:FormGroup;
  public name:AbstractControl;
  public imei:AbstractControl;
  public submitted:boolean = false;

  private mainUrl = 'http://localhost:4123/'; 
    private headers: Headers;

  userDetails = {
    "corporateName": "",
    "firstName": "",
    "lastName": "",
    "type": "",
    "addresses": [
          {
              "line1": "123, ABC Road",
              "line2": "DEF Blvd",
              "city": "GHIJK City",
              "state": "LM State",
              "countryCode": "IN",
              "zipCode": "NOPQRS",
              "latitude": "100.01",
              "longitude": "100.01",
              "type": "work"
          }
      ],
      "emails": [
          {
              "email": "ashok.kumar@centilio.com",
              "type": "work"
          }
      ],
      "contactNumbers": [
          {
              "number": "+919972012345",
              "type": "work"
          }
      ],
      "role": "user"
  };

  comments: Comment[];

  constructor(fb:FormBuilder,  private route: ActivatedRoute,private router: Router, private http: Http,private adduserService: AdduserService) {
    
  }

  addUser() {
    console.log("hi");
        console.log(this.userDetails);

        let body = JSON.stringify(this.userDetails);
        this.headers = new Headers();

        this.headers.append('Accept' , 'application/json');
        // this.headers.append('Authorization', values);  
         this.headers.append('Content-Type', 'application/json');

         this.http.post(this.mainUrl + 'clients', body, {headers: this.headers})
                        // ...and calling .json() on the response to return data
                         .map((res: Response) => {
                             if(res.status < 200 || res.status >= 1000) {
                                console.log("if");
                                
                              throw new Error('This request has failed ' + res.status);
                              } 
                              // If everything went fine, return the response
                              else {
                                  console.log("else");
                                  alert("Added Succesfully");
                                  this.router.navigate(["/pages/users/viewuser"]);
                                  return res.json();
                              }
                          }).subscribe(
                            data => this.comments = data,
                            // error => alert(error),
                            () => console.log(this.comments)
                          );
        
        // this.adduserService.addUser(this.userDetails).subscribe(
        //     data => this.comments = data,
        //     error => alert(error),
        //     () => console.log(this.comments)
            
        // );
  }
}
