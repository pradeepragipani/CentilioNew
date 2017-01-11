import { Routes, RouterModule }  from '@angular/router';

import { Users } from './users.component';
import { Adduser } from './components/adduser/adduser.component';
import { Viewuser } from './components/viewuser/viewuser.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Users,
    children: [
      { path: 'adduser', component: Adduser },
      { path: 'viewuser', component: Viewuser }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
