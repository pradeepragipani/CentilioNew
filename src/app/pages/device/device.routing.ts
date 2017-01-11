import { Routes, RouterModule }  from '@angular/router';

import { Device } from './device.component';
import { Adddevice } from './components/adddevice/adddevice.component';
import { DeviceById } from './components/deviceById/deviceById.component';
import { Viewdevice } from './components/viewdevice/viewdevice.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Device,
    children: [
      { path: 'adddevice', component: Adddevice },
      { path: 'deviceById', component: DeviceById },
      { path: 'viewdevice', component: Viewdevice }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
