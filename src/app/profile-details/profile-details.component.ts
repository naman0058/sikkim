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
let employee_code = encodeURIComponent($('#employee_code').val())
let office_code = encodeURIComponent($('#office_code').val())

console.log("empcode",employee_code)
console.log("offceid",office_code)

   var url = `http://sikkimfred.local.api/api/employee/details?empCode=${employee_code}&officeId=${office_code}`;

   
            fetch(url,{
            method : 'GET',
        
            headers : new Headers({
             'Content-Type': 'application/json'
            })
            }).then(res=>res.json())
            .catch(error => console.error("Error",error))
            .then (result => {
               makeTable(result)  
               makeDeduction(result.result.deductionsByAdjustment)
               makeInsurance(result.result.insurances)
               makeLoans(result.result.loans)
               makepercentageAllowanceTypes(result.result.percentageAllowanceTypes)
              makefixedAllowanceTypes(result.result.fixedAllowanceTypes)
              makeslabAllowanceSubTypes(result.result.slabAllowanceSubTypes)
              makefamilyMaintenances(result.result.familyMaintenances)
              makerecoveries(result.result.recoveries)
              makeothers(result.result.others)
        
       

      })
}


function makeothers(data){
  let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Description</th>
    <th>Amount</th>
  
  
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.otherId}</td>
  <td>${item.description}</td>
  <td>${item.amount}</td>
  
 
</tr>`
  })
 table+=`</tbody>
</table>`
$('#others').html(table)
}

function makerecoveries(data){
  let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Name</th>
    <th>Total Amount</th>
   <th>Installment Amount</th>
   <th>Current Balance</th>
   <th>Remarks</th>
  
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.recoveryId}</td>
  <td>${item.recoveryTypeName}</td>
  <td>${item.totalAmount}</td>
  <td>${item.installmentAmount}</td>
  <td>${item.currentBalance}</td>
  <td>${item.remarks}</td>
 
</tr>`
  })
 table+=`</tbody>
</table>`
$('#recoveries').html(table)
}


function makefamilyMaintenances(data){
  let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Bank Name</th>
    <th>Branch Name</th>
   <th>Account Holder Name</th>
   <th>Account Number</th>
   <th>Amount</th>
   <th>Description</th>
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.familyMaintenanceId}</td>
  <td>${item.bankName}</td>
  <td>${item.bankBranchName}</td>
  <td>${item.accountHolderName}</td>
  <td>${item.accountNumber}</td>
  <td>${item.amount}</td>
  <td>${item.description}</td>
</tr>`
  })
 table+=`</tbody>
</table>`
$('#familyMaintenances').html(table)
}

function makeslabAllowanceSubTypes(data){
  let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Name</th>
    <th>Type Name</th>
   <th>Amount</th>
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.slabAllowanceSubTypeId}</td>
  <td>${item.slabAllowanceSubTypeName}</td>
  <td>${item.slabAllowanceTypeName}</td>
  <td>${item.amount}</td>
</tr>`
  })
 table+=`</tbody>
</table>`
$('#slabAllowanceSubTypes').html(table)
}




function makefixedAllowanceTypes(data){
  let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Name</th>
     <th>Amount</th>
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.fixedAllowanceTypeId}</td>
  <td>${item.name}</td>
  <td>${item.amount}</td>
</tr>`
  })
 table+=`</tbody>
</table>`
$('#fixedAllowanceTypes').html(table)
}



function makepercentageAllowanceTypes(data){
  let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Name</th>
    <th>Rate</th>
    <th>Amount</th>
   
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.percentageAllowanceTypeId}</td>
  <td>${item.percentageAllowanceName}</td>
  <td>${item.percentageAllowanceRate}</td>
  <td>${item.percentageAllowanceAmount}</td>
</tr>`
  })
 table+=`</tbody>
</table>`
$('#percentageAllowanceTypes').html(table)
}


function makeLoans(data){
  let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Bank Name</th>
    <th>Branch Name</th>
    <th>IFSC Code</th>
    <th>Account Number</th>
    <th>Installment Amount</th>
    <th>Number of Installment</th> 
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.loanId}</td>
  <td>${item.bankName}</td>
  <td>${item.bankBranchName}</td>
  <td>${item.ifscCode}</td>
  <td>${item.bankAccountNumber}</td>
  <td>${item.loanInstallmentAmount}</td>
  <td>${item.numberOfInstallment}</td>
  
</tr>`
  })
 table+=`</tbody>
</table>`
$('#loans').html(table)
}



function makeInsurance(data){
  let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Company Name</th>
    <th>Branch Name</th>
    <th>Policy Number</th>
    <th>Premium Amount</th>
    <th>PAO Code</th> 
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.insuranceId}</td>
  <td>${item.insuranceCompanyName}</td>
  <td>${item.insuranceCompanyBranchName}</td>
  <td>${item.policyNumber}</td>
  <td>${item.premiumAmount}</td>
  <td>${item.paCode}</td>
  
</tr>`
  })
 table+=`</tbody>
</table>`
$('#insurance').html(table)
}


function makeDeduction(data){
  let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
    <th>SL No.</th> 
    <th>ID</th>
    <th>Type Name</th>
    <th>Amount</th>
    <th>Head</th> 
  
      </tr>
  </thead>
 
  <tbody>`
  $.each(data,(i,item)=>{

  table+=`  <tr>
  <td>${i+1}</td>
  <td>${item.deductionByAdjustmentId}</td>
  <td>${item.deductionByAdjustmentTypeName}</td>
  <td>${item.deductionAmount}</td>
  <td>${item.adjustmentHead}</td>
  
</tr>`
  })
 table+=`</tbody>
</table>`
$('#deduction').html(table)
}



function makeTable(result){
  let table = `
  <div id="details">
  
        <section class="my-app__header ">
          <div class="container">
            <div class="my-app__header-inner">
              <div class="my-app__header-text media">
               <img src="/images/dataresult[1][0].imagedata" style="width: 80px;">
                <div class="media-body">
                  <h1 class="my-app__header-title">Hi there, ${result.result.firstName} ${result.result.middleName} ${result.result.lastName}</h1>
                  
                </div> 
              </div>
              <div class="my-action-buttons my-app__header__buttons">
                <!-- <button class="my-action-button">
                  <img class="my-action-button__icon" src="./images/icon-money.svg" alt>
                  Send money
                </button> -->
             
              </div>
            </div>
          </div>
        </section>
        <!-- End content header -->
  
        <!-- Begin content body -->
        <section class="my-app__body">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <!-- Begin Payment Balance card -->
                <div class="my-card card">
                  <div class="my-card__header card-header">
                    <div class="my-card__header-title">
                      <div class="my-text-overline">Employee Code</div>
                      <h3 class="my-text-headline">172/pao</h3>
                    </div>
                    <!-- <a class="my-card__header-link" href="#">Details →</a> -->
                  </div>
                  <div class="my-card__body card-body">
                    <div class="my-text-overline">Profile Details</div>
                    <dl class="my-list my-list--definitions my-dl">
                      <dt>Date Of Birth</dt>
                      <dd>${result.result.dateOfBirth}</dd>
                      <dt>Gender</dt>
                      <dd>${result.result.gender}</dd>
                      <dt>Mobile Number</dt>
                      <dd>${result.result.phoneNumber}</dd>
                      <dt>Email</dt>
                      <dd>${result.result.emailId}</dd>
  
                      <dt>Religion</dt>
                      <dd>${result.result.religionId}</dd>
                      <dt>Aadhar Number</dt>
                      <dd>${result.result.aadharNumber}</dd>
                      <dt>Department</dt>
                      <dd>${result.result.departmentId}</dd>
                      <dt>District</dt>
                      <dd>${result.result.districtId}</dd>
  
                      <dt>Designation</dt>
                      <dd>${result.result.designationId}</dd>
                     
                      
                    </dl>
                   
                  
                  </div>
                  
                </div>
                <!-- End Payment Balance card -->
  
             
              </div>
  
           
  
  
  
  
              
            </div>
          </div>
  
  <br/>
          <div class="container">
              <div class="row">
                <div class="col-4">
                  <!-- Begin Payment Balance card -->
                  <div class="my-card card">
                    <div class="my-card__header card-header">
                      <div class="my-card__header-title">
                        <div class="my-text-overline">Bank Details</div>
                       
                      </div>
                      <!-- <a class="my-card__header-link" href="#">Details →</a> -->
                    </div>
                    <div class="my-card__body card-body">
  
                      <dl class="my-list my-list--definitions my-dl">
                        <dt>Account Number</dt>
                        <dd>${result.result.accountNumber}</dd>
                        <dt>Branch ID</dt>
                        <dd>${result.result.bankBranchId}</dd>
                        <dt>Bank ID</dt>
                        <dd>${result.result.bankId}</dd>
                        
                        
                      </dl>
                     
                    
                    </div>
                    
                  </div>
                  <!-- End Payment Balance card -->
    
               
                </div>
    
                <div class="col-8">
                 
    
                  <!-- Begin Pending card -->
                  <div class="my-card card">
                    <div class="my-card__header card-header">
                      <h3 class="my-card__header-title card-title">Joining & Retirement Date</h3>
                      <!-- <a class="my-card__header-link" href="#">See all →</a> -->
                    </div>
                    <ul class="my-list list-group list-group-flush">
                      
                     
                      
                      <li class="my-list-item list-group-item">
                         <div class="my-list-item__text">
                          <h4 class="my-list-item__text-title">Date of Joining</h4>
                           </div>
                        <div class="my-list-item__fee">
                          <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${result.result.dateOfJoining}</a>
                        </div>
                      </li>
  
                      <li class="my-list-item list-group-item">
                          <div class="my-list-item__text">
                           <h4 class="my-list-item__text-title">Date of Retirement</h4>
                            </div>
                         <div class="my-list-item__fee">
                           <a class="my-card__header-link quiz" id="dataresult[0][i].iddata" style="cursor: pointer;" >${result.result.dateOfRetirement}</a>
                         </div>
                       </li>
                    
                
                     
                    
                    </ul>
                  </div>
                  <!-- End Pending card -->
    
                
                </div>
    
    
    
    
    
    
                
              </div>
            </div>
  
        </section>
        </div>`
        $('#result').html(table)
}
     
       
})      
    })
     
    })(jQuery);


  }

}
