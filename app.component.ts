import { Component } from '@angular/core';
import {RegformModelService} from './model/regform.model'


@Component({
  selector: 'app-root',
  template:`

<sign-up [datas]="regModel.formdatas"></sign-up>

<log-in></log-in>




<admin-login></admin-login>
<opportunities></opportunities>

  `

})
export class AppComponent {

  constructor(public regModel:RegformModelService){}
}
