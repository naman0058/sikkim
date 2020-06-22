import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-ddo-report',
  templateUrl: './ddo-report.component.html',
  styleUrls: ['./ddo-report.component.css']
})
export class DdoReportComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    (function ($) {
      $(document).ready(function(){
       
       $.getJSON('http://sikkimfred.local.api/api/DDORegistration/pending',data=>{
        console.log(data)
       makeTable(data)
        
       })

      function makeTable(data){
        let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
          <th>SL No.</th> 
         <th>EmailID</th>
          <th>Department</th>
          <th>Designation</th> 
          <th>District</th>
          <th>Office Address(1)</th>
          <th>Office Address(2)</th>
          <th>Tin No</th> 
          <th>Tan No</th>
          <th>Contact Number</th>
           <th>Accept</th>
          <th>Delete</th>
            </tr>
        </thead>
       
        <tbody>`
        $.each(data,(i,item)=>{

        table+=`  <tr>
        <td>${i+1}</td>
            <td>${item.emailId}</td>
        <td>${item.departmentName}</td>
        <td>${item.desginationName}</td>
        <td>${item.districtName}</td>
        <td>${item.officeAddress1}</td>
        <td>${item.officeAddress2}</td>
        <td>${item.tinNumber}</td>
        <td>${item.tanNumber}</td>
        <td>${item.contactNumber}</td>
        
        <td><button class="btn btn-success accept" regid="${item.id}">Accept</button></td>
       <td><button class="btn btn-danger delete" id="${item.id}">Delete</button></td>
      </tr>`
        })
       table+=`</tbody>
      </table>`
      $('#result').html(table)
      }




      $('#result').on('click', '.accept', function() {
        var url = 'http://sikkimfred.local.api/api/DDORegistration/approve';
       
        const regId = $(this).attr('regid')
          var data = {
            regId : parseInt(regId),
            approvedBy : 1
          }
          console.log('sending data',data)
            fetch(url,{
            method : 'POST',
            body: JSON.stringify(data),
            headers : new Headers({
             'Content-Type': 'application/json'
            })
            }).then(res=>res.json())
            .catch(error => console.error("Error",error))
            .then (result => {
            
           // console.log("response",result)
            refresh1()
            
            })
    })



     $('#result').on('click', '.delete', function() {
      const id = $(this).attr('id')
      console.log("id hai",id)

      fetch('http://sikkimfred.local.api/api/DDORegistration/' + id, {
        method: 'DELETE',
      }).then(res => res.text()) // or res.json()
      .then(res => refresh())
    })



function refresh(){
  
  $.getJSON('http://sikkimfred.local.api/api/DDORegistration/pending',data=>{
     makeTable(data)
     alert("Request Deleted Successfully")
    })
}



function refresh1(){
  
  $.getJSON('http://sikkimfred.local.api/api/DDORegistration/pending',data=>{
     makeTable(data)
     alert("Request Accepted Successfully")
    })
}


      });
    })(jQuery);
  }

}