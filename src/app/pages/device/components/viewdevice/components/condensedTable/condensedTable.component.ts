import {Component} from '@angular/core';

import {ViewdeviceService} from '../../viewdevice.service';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html')
})
export class CondensedTable {

  peopleTableData:Array<any>;
  // deviceData:Array<any>;
  devices: Comment[];

  constructor(private _viewdeviceService: ViewdeviceService) {
    this.peopleTableData = _viewdeviceService.peopleTableData;
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
  ngOnInit() {
      this.loadDevices(); // Now has value;
  }
}
