import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

    (function ($) {

     $(document).ready(function(){
    $('#details').hide()


    $('#submit').click(function(){


if( $('#employee_code').val() == null || $('#employee_code').val() == "null" || $('#employee_code').val() == [] || $('#employee_code').val() == "" )
  alert("Enter Employee Code...")
else if( $('#office_code').val() == null || $('#office_code').val() == "null" || $('#office_code').val() == [] || $('#office_code').val() == "" )
  alert("Enter Office Code...")
else{
let employee_code = $('#employee_code').val()
let office_code = $('#office_code').val()
   var url = `http://local.api.com/api/employee/details?empCode=${employee_code}&officeId=${office_code}`;

   
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
