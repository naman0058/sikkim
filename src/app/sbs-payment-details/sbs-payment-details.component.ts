import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
declare  var jQuery:  any;

@Component({
  selector: 'app-sbs-payment-details',
  templateUrl: './sbs-payment-details.component.html',
  styleUrls: ['./sbs-payment-details.component.css']
})
export class SbsPaymentDetailsComponent  {

  
  constructor() { }

  ngOnInit(): void {
      (function ($) {
      $(document).ready(function(){





$.ajax({
    url : "https://www.deloservices.com/adminhome/bargraph",
    method : "GET",
    success : function(data) {
        console.log(data)
        var month = [];
        var totalprice = []
       for(var i in data){
           month.push(data[i].month)
           totalprice.push(data[i].totalprice)
       }

       var chartdata = {
           labels : month,
           datasets : [{
               label : "Monthly Income",
               backgroundColor : '#36A2EB',
               borderColor : '#FF6384',
               hoverBackgroundColor : 'red',
               hoverBorderColor : 'rgba(200,200,200,0.75)',
               data : totalprice
           }]
       }
      var ctx = $('#mycanvas')
      var barGraph = new Chart(ctx,{
          type : 'line',
          data : chartdata
      })
    },
    error : function(data){
        alert('Error Occured');
    }
})


})
      })(jQuery);
  }

}



      



