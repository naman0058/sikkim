import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;





@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    (function ($) {
      $(document).ready(function(){
      	
      });
    })(jQuery);
  }
}
