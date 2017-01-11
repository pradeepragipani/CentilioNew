import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ViewdeviceService} from '../viewdevice/viewdevice.service';
import {DeviceByIdService} from './deviceById.service';

@Component({
  selector: 'deviceById',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./deviceById.scss')],
  template: require('./deviceById.html'),
  providers: [DeviceByIdService]
})
export class DeviceById {

  devices: Comment[];
  deviceById: Comment[];

  constructor(private router: Router,private _viewdeviceService: ViewdeviceService, private deviceByIdService: DeviceByIdService) {
  }

  public loadDevices():void {
    
        console.log("on viewdevice");       
        this._viewdeviceService.getDevices().subscribe(
            data => this.devices = data.devices,
            error => alert(error),
            () => console.log(this.devices)
        );

        // this.deviceData = this.devices;
  }
  
  onChange(deviceId) {
    console.log(deviceId);
    
  }

  public onLoad(uuid):void {
    
        console.log("on viewdevice");       
        this.deviceByIdService.getDeviceById(uuid).subscribe(
            data => this.deviceById = data.devices,
            error => alert(error),
            () => console.log(this.deviceById)
        );
  }
  
  ngOnInit() {
      this.loadDevices(); // Now has value;
      this.onLoad(1);
  }
}
