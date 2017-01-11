import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ViewdeviceService} from './viewdevice.service';

@Component({
  selector: 'viewdevice',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./viewdevice.scss')],
  template: require('./viewdevice.html'),
  providers: [ViewdeviceService]
})
export class Viewdevice {

  devices: Comment[];

  constructor(private router: Router, private viewdeviceService: ViewdeviceService) {
  }

  // public onLoad():void {
    
  //       console.log("on viewdevice");       
  //       this.viewdeviceService.getDevices().subscribe(
  //           data => this.devices = data,
  //           error => alert(error),
  //           () => console.log(this.devices)
  //       );
  // }
  // ngOnInit() {
  //     this.onLoad(); // Now has value;
  // }
}
