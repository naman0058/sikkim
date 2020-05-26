import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-rco-users',
  templateUrl: './rco-users.component.html',
  styleUrls: ['./rco-users.component.css']
})
export class RcoUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    (function ($) {
      $(document).ready(function(){
       
       $.getJSON('http://sikkimfred.local.api/api/user/rco',data=>{
        
       makeTable(data)
        
       })

      function makeTable(data){
        let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
              <th>SL No.</th> 
            <th>Name</th>
            <th>Reg. Type</th>
            <th>User ID</th>
            </tr>
        </thead>
       
        <tbody>`
        $.each(data,(i,item)=>{

        table+=`  <tr>
            <td>${i+1}</td>
            <td>${item.userName}</td>
            <td>${item.registrationType}</td>
            <td>${item.id}</td>
          
           <td><button class="btn btn-primary">Send Details</button></td>
          </tr>`
        })
       table+=`</tbody>
      </table>`
      $('#result').html(table)
      }



      });
    })(jQuery);
  }

}

