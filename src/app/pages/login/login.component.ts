import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginService} from './login.service';
import { Http,HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
  providers: [LoginService]
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  private mainUrl = 'http://localhost:4123/'; 
    private headers: Headers;


  login = {
    emailid: "",
    password: ""
  };

  getData: string;
  comments: Comment[];

  constructor(fb:FormBuilder,  private route: ActivatedRoute,private router: Router, private loginService: LoginService,private http: Http) {
    
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    console.log("hi");

    let resHeaders;

    let valuesAH = 'Basic ' + btoa(this.login.emailid + ':' + this.login.password);

        this.headers = new Headers();

        this.headers.append('Accept' , 'application/json');
        this.headers.append('Authorization', valuesAH);  
         this.headers.append('Content-Type', 'application/json');
    
    this.submitted = true;
    if (this.form.valid) {
        console.log("form valid");
        console.log(this.login);

        this.http.get(this.mainUrl + 'login',  {headers: this.headers})
                        // ...and calling .json() on the response to return data
                         .map((res: Response) => {
                             if(res.status < 200 || res.status >= 300) {
                                console.log("if");
                                
                              throw new Error('This request has failed ' + res.status);
                              } 
                              // If everything went fine, return the response
                              else {
                                  console.log("else");
                                  this.router.navigate(["/pages/dashboard"]);
                                  return res.json();
                              }
                            }).subscribe(
                                data => this.comments = data,
                                error => alert(error),
                                () => console.log(this.comments)
                                
                              )
                         //...errors if any
                        //  .catch(this.handleError);
        
        // this.loginService.postLogin(this.login).subscribe(
        //     data => this.comments = data,
        //     error => alert(error),
        //     () => console.log(this.comments)
            
        // );
        // if(this.comments !== null){
        //   this.router.navigate(["/pages/dashboard"]);
        // }
        
      // your code goes here
      // console.log(values);
     // this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    }
  }

  handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
