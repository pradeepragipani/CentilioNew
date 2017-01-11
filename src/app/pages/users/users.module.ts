import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './users.routing';
import { Users } from './users.component';
import { Adduser } from './components/adduser/adduser.component';
import { Viewuser } from './components/viewuser/viewuser.component';
import { ViewuserService } from './components/viewuser/viewuser.service';
import { CondensedTable } from './components/viewuser/components/condensedTable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing
  ],
  declarations: [
    Users,
    Adduser,
    Viewuser,
    CondensedTable
  ],
  providers: [
    ViewuserService
  ]
})
export default class EditorsModule {
}
