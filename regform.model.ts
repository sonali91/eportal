import { Injectable } from '@angular/core';
import {Validators} from '@angular/forms';

@Injectable()
export class RegformModelService{

  public formdatas:any=[
{
  inputType:'text',
  label:'First Name',
  value:'',
  validations:[Validators.required],
  uid:'_fname'

},
{
  inputType:'text',
  label:'Last Name',
  value:'',
  validations:[Validators.required],
  uid:'_lname'
},
{
  inputType:'text',
  label:'Username',
  value:'',
  validations:[Validators.required],
  uid:'_uname'
},
{
  inputType:'password',
  label:'Password',
  value:'',
  validations:[Validators.required,Validators.minLength(8)],
  uid:'_pwd'
},
{
  inputType:'text',
  label:'Email',
  value:'',
  validations:[Validators.required],
  uid:'_email'
},
{
  inputType:'text',
  label:'Mobile number',
  value:'',
  validations:[Validators.required],
  uid:'_mobile'
}

];

}
