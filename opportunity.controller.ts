import { Component } from '@angular/core';

import {ApiService} from './apiServices/api';
@Component({
  selector: 'account',
  template: `
     <h2>Available opportunities</h2>
     <table>
      <tr>
        <th>title</th>
        <th>appl_close_date</th>
        <th>earliest_start_date</th>
        <th>description</th>
        <th>backgrounds</th>
        <th>skills</th>
        <th>selection_process</th>
        <th>salary</th>
        <th>city</th>
      </tr>
      <tr *ngFor="let record of optyDetails">
        <td>{{record.opty_title}}</td>
        <td>{{record.opty_closedate}}</td>
        <td>{{record.opty_startdate}}</td>
        <td>{{opty_description}}</td>
        <td>{{record.opty_background}}</td>
        <td>{{record.opty_skill}}</td>
        <td>{{record.opty_selectionprocess}}</td
        <td>{{record.opty_salary}}</td>
        <td>{{record.opty_city}}</td>



        <td> <button (click)="editForm(record.opty_id)">Edit</button> </td>
        <td> <button>Delete</button> </td>
      </tr>
     </table>

   <div class="popup" *ngIf="updateForm==true">
      <div>
         Title <br>
          <input [(ngModel)]="update.opty_title" /> <br>
        Application_close_date <br>
          <input [(ngModel)]="update.opty_closedate" /> <br>
        Earliest_start_date <br>
          <input [(ngModel)]="update.opty_startdate" /> <br>
        Description <br>
          <input [(ngModel)]="update.opty_description" />  <br>
        Background <br>
          <input [(ngModel)]="update.opty_background" />  <br>
       skill <br>
           <input [(ngModel)]="update.opty_skill" />  <br>
       Selection process<br>
            <input [(ngModel)]="update.opty_selectionprocess" />  <br>
       Salary<br>
        <input [(ngModel)]="update.opty_salary" />  <br>
      City<br>
         <input [(ngModel)]="update.opty_city" />  <br>


          <button (click)="submitFormVal()">Update</button>
      </div>
   </div>

  `,
  styles:[`
      th,td{
        padding: 5px; border: 1px solid silver;
      }
      .popup{
        padding: 100px;
        position: fixed;
        left: 25%; top: 20%;
        background: white;
        box-shadow: 0 0 5px black;
      }
  `]
})
export class ControllerPage{
public optyDetails:any;
public update:any={}; public updateForm:boolean=false;
constructor(public api:ApiService){}

ngOnInit(){
  this.optyForm();
}
optyForm(){
   this.api.viewOpportunity({}).then( (res:any)=>{
     //console.log( res );
     this.optyDetails = res;
   } )
}
editForm(opty_id:number){
  this.api.viewOpportunity({
    'opty_id': opty_id
  }).then( (res:any)=>{
    //console.log( res );
    this.update = res[0];
  console.log(  this.update );
  } )
  this.updateForm=true;
}

submitFormVal(){

 this.api.updateOpportunityForm(this.update).then((res:any)=>{
  // alert('updated');
   this.optyForm();
  });
  this.updateForm = false;

}

}
