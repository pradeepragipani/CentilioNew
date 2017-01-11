import { Component, ViewEncapsulation } from '@angular/core';

import './adddevice.loader.ts';

@Component({
  selector: 'adddevice-component',
  encapsulation: ViewEncapsulation.None,
  template: require('./adddevice.html'),
  styles: [require('./adddevice.scss')]
})

export class Adddevice {
  public adddeviceContent:string = '<p>Hello Adddevice</p>';
  public config = {
    uiColor: '#F0F3F4',
    height: '600'
  };
  deviceDetails = {
    devicename: "",
    deviceid: "",
    description: "",
    frequency: ""
  };
  constructor() {
    
  }
}
