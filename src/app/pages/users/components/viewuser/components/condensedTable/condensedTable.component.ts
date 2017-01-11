import {Component} from '@angular/core';

import {ViewuserService} from '../../viewuser.service';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html')
})
export class CondensedTable {

  peopleTableData:Array<any>;
  // deviceData:Array<any>;
  clients: Comment[];

  constructor(private _viewuserService: ViewuserService) {
    this.peopleTableData = _viewuserService.peopleTableData;
  }

  public loadDevices():void {
    
        console.log("on viewdevice");       
        this._viewuserService.getClients().subscribe(
            data => this.clients = data.clients,
            error => alert(error),
            () => console.log(this.clients)
        );

        // this.deviceData = this.devices;
  }
  ngOnInit() {
      this.loadDevices(); // Now has value;
  }
}
