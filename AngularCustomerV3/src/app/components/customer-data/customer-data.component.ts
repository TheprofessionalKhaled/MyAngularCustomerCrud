import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/common/customer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {

  customers : Customer[];

  constructor(private router:Router ,private apiService : ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem("token")){
      this.router.navigate(["login"]);
      return;
    }
    this.apiService.getCustomers().subscribe((data:any) => {this.customers = data.result});
    
  }

  deleteCustomer(customer:Customer):void {
    this.apiService.deleteCustomer(customer.id).subscribe(data =>{this.customers = this.customers.filter(u =>u !==customer);})
  };
  editCustomer(customer :Customer):void {
    window.localStorage.removeItem("editCustomerId");
    window.localStorage.setItem("editCustomerId",customer.id.toString());
    this.router.navigate(["edit-customer"]);
  }
  addCustomer():void {
    this.router.navigate(["add-customer"]);
  };


}
