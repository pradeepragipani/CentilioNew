import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './device.routing';
import { Device } from './device.component';
import { Adddevice } from './components/adddevice/adddevice.component';
import { DeviceById } from './components/deviceById/deviceById.component';
import { Viewdevice } from './components/viewdevice/viewdevice.component';
import { ViewdeviceService } from './components/viewdevice/viewdevice.service';
import { CondensedTable } from './components/viewdevice/components/condensedTable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing
  ],
  declarations: [
    Device,
    Adddevice,
    DeviceById,
    Viewdevice,
    CondensedTable
  ],
  providers: [
    ViewdeviceService
  ]
})
export default class EditorsModule {
}
