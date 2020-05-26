import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-ddo-users',
  templateUrl: './ddo-users.component.html',
  styleUrls: ['./ddo-users.component.css']
})
export class DdoUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    (function ($) {
      $(document).ready(function(){
       
       $.getJSON('http://sikkimfred.local.api/api/user/ddo',data=>{
        
       makeTable(data)
        
       })

      function makeTable(data){
        let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
              <th>SL No.</th> 
            <th>Name</th>
            <th>DDO Code</th>
            <th>User ID</th>
            </tr>
        </thead>
       
        <tbody>`
        $.each(data,(i,item)=>{

        table+=`  <tr>
            <td>${i+1}</td>
            <td>${item.userName}</td>
            <td>${item.ddoCode}</td>
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
