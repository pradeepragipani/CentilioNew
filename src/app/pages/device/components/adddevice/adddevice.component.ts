import { Component, ViewEncapsulation } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http,HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AdddeviceService} from './adddevice.service';

// import './adddevice.loader.ts';

@Component({
  selector: 'adddevice-component',
  encapsulation: ViewEncapsulation.None,
  template: require('./adddevice.html'),
  styles: [require('./adddevice.scss')],
  providers: [AdddeviceService]
})

export class Adddevice {
  public adddeviceContent:string = '<p>Hello Adddevice</p>';
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

  deviceDetails = {
    "name":"",
    "latitude":"100.001",
    "longitude":"100.001",
    "status":"new",
    "deviceType":"5875d6f66d625611c4fbd9a4",
    "client":"2aa5e746-01d3-430b-aa3b-5227ba56ac63"
  };
  comments: Comment[];

  constructor(fb:FormBuilder,  private route: ActivatedRoute,private router: Router, private adddeviceService: AdddeviceService,private http: Http) {
    // this.formDevice = fb.group({
    //   'name': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    //   'imei': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    // });

    // this.name = this.formDevice.controls['name'];
    // this.imei = this.formDevice.controls['imei'];
  }

  addDevice() {
    console.log("hi");
    let body = JSON.stringify(this.deviceDetails);
        this.headers = new Headers();

        this.headers.append('Accept' , 'application/json');
        // this.headers.append('Authorization', values);  
         this.headers.append('Content-Type', 'application/json'); 
    // this.submitted = true;
    
    // if (this.formDevice.valid) {
    //     console.log("form valid");
        console.log(this.deviceDetails);

        this.http.post(this.mainUrl + 'devices', body, {headers: this.headers})
                        // ...and calling .json() on the response to return data
                         .map((res: Response) => {
                             if(res.status < 200 || res.status >= 300) {
                                console.log("if");
                                
                              throw new Error('This request has failed ' + res.status);
                              } 
                              // If everything went fine, return the response
                              else {
                                  console.log("else");
                                  alert("Added Succesfully");
                                  this.router.navigate(["/pages/device/viewdevice"]);
                                  return res.json();
                              }
                          }).subscribe(
                            data => this.comments = data,
                            // error => alert(error),
                            () => console.log(this.comments)
                          );
        
        // this.adddeviceService.addDevice(this.deviceDetails).subscribe(
        //     data => this.comments = data,
        //     error => alert(error),
        //     () => console.log(this.comments)
            
        // );
    // }
  }
}
