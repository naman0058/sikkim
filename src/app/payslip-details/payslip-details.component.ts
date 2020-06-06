import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-payslip-details',
  templateUrl: './payslip-details.component.html',
  styleUrls: ['./payslip-details.component.css']
})
export class PayslipDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (function ($) {

     $(document).ready(function(){
    $('#details').hide()


    $('#submit').click(function(){


if( $('#employee_code').val() == null || $('#employee_code').val() == "null" || $('#employee_code').val() == [] || $('#employee_code').val() == "" )
  alert("Enter Employee Code...")
else if( $('#month').val() == null || $('#month').val() == "null" || $('#month').val() == [] || $('#month').val() == "" )
  alert("Select Month...")
  else if( $('#year').val() == null || $('#year').val() == "null" || $('#year').val() == [] || $('#year').val() == "" )
  alert("Select Year...")
else{
let employee_code = $('#employee_code').val()
let month = $('#month').val()
let year = $('#year').val()
 var vals = year.split('-');
   var years = vals[0];
   var url = `http://local.api.com/api/employee/salary?empCode=${employee_code}&month=${month}&year=${years}`;

    
            fetch(url,{
            method : 'GET',
                 headers : new Headers({
             'Content-Type': 'application/json'
            })
            }).then(res=>res.json())
            .catch(error => console.error("Error",error))
            .then (result => {
            console.log("result hai",result)

        
       

      })
}

     
       
})      
    })
     
    })(jQuery);


  }

}
