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
     
          var url = 'http://sikkimfred.local.api/api/user/login';
       
       
          var data = {
            number : '123456789'
            // password : $('#password').val()
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
            console.log("result hai",result)

        
       

      })
    })(jQuery);


  }

}
