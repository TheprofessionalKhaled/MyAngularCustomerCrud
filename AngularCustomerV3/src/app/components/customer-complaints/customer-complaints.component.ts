import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaints } from 'src/app/common/complaints';
import { Api2Service } from 'src/app/service/api2.service';
import { Customer } from 'src/app/common/customer';

@Component({
  selector: 'app-customer-complaints',
  templateUrl: './customer-complaints.component.html',
  styleUrls: ['./customer-complaints.component.css']
})
export class CustomerComplaintsComponent implements OnInit {
  complaint : Complaints[];
  customer : Customer;

  constructor(private router:Router ,private api2Service : Api2Service) { }

  ngOnInit() {
    if(!window.localStorage.getItem("token")){
      this.router.navigate(["login"]);
      return;
    }
    window.localStorage.setItem("addComplaintId",this.customer.id.toString());
    let customerId = window.localStorage.getItem("addComplaintId");


    this.api2Service.getComplaintById(+customerId).subscribe(data => {this.complaint = data.result;});
    
  }

 
  addComplaint():void {
    this.router.navigate(["add-complaint"]);
  };

}