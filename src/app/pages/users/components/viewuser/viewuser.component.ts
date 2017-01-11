import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'viewuser',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./viewuser.scss')],
  template: require('./viewuser.html')
})
export class Viewuser {

  constructor() {
  }
}
