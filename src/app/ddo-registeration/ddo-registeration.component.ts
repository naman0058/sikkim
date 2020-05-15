import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;


@Component({
  selector: 'app-ddo-registeration',
  templateUrl: './ddo-registeration.component.html',
  styleUrls: ['./ddo-registeration.component.css']
})
export class DdoRegisterationComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    (function ($) {
      $(document).ready(function(){
        
       $.getJSON('https://www.deloservices.com/api/index',data=>{
        fillDropDown('categoryid', data, 'Choose Category', 0) 
        console.log("data work",data)
       })

       function fillDropDown(id, data, label, selectedid = 0) {
        $(`#${id}`).empty()
        $(`#${id}`).append($('<option>').val("null").text(label))
    
        $.each(data, (i, item) => {
            if (item.id == selectedid) {
                $(`#${id}`).append($('<option selected>').val(item.id).text(item.name))
            } else {
                $(`#${id}`).append($('<option>').val(item.id).text(item.name))
            }
        })
    }



      });
    })(jQuery);
  }

}
