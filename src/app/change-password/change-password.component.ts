import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

 constructor() { }

  ngOnInit(): void {

    (function ($) {
      $(document).ready(function(){

   console.log('helo admin')
        $('#login').click(function(){
          if($('#userName').val() == [] || $('#userName').val() == "" || $('#userName').val() == "null" || $('#userName').val() == null) alert("Please Enter Username")
        else{
          var url = 'http://sikkimfred.local.api/api/user/sendpasswordlink';
          var data = {
            emailid : $('#userName').val(),
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
            console.log("result",result)
              if(result.error) alert("Email Id not exists")
              else alert("Link has been sent to registered email...")


            })

        }
        })

      })
    })(jQuery);




  }

}
