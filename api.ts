import { Injectable } from '@angular/core';
//import {Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService{
  public base:string="http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/";

  constructor(public http:HttpClient){}
  //constructor(public http:HttpClient) {}
  //fetch(base).then(response => response.json())
  //  .then(data => {console.log('data');
  //}){}

  //For Companies
  company_login(data:any){
  return this.post('v2/login',data);
}
  company_create(data:any){
    return this.post('v2/opportunities',data);
  }
  //company_edit(data:any){}
  company_update(data:any){
  return this.post('v2/opportunities{529}',data);
}
  company_delete(data:any){
    return this.post('v2/opportunities{529}',data);
  }

  post(url:string,params:any){
    var data=JSON.stringify(params);
    let headers:any=new HttpHeaders();
    headers=headers.set('content-Type','application/json;charset=utf-8');


  return this.http.post(this.base+url,data,headers)
                 .toPromise()
                .then()
                .catch()
              }

              get(){}

}
