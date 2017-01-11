import { Component, ViewEncapsulation } from '@angular/core';

import './adduser.loader.ts';

@Component({
  selector: 'adduser-component',
  encapsulation: ViewEncapsulation.None,
  template: require('./adduser.html'),
  styles: [require('./adduser.scss')]
})

export class Adduser {
  public adduserContent:string = '<p>Hello Adduser</p>';
  public config = {
    uiColor: '#F0F3F4',
    height: '600'
  };
  userDetails = {
    fname: "",
    lname: "",
    email: "",
    password: ""
    // confirmPwd: ""
  };
  constructor() {
    
  }
}
