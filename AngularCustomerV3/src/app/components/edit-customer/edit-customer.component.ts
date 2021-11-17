import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import { Customer } from 'src/app/common/customer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: Customer;
  editForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    let customerId = window.localStorage.getItem("editCustomerId");
    if (!customerId) {
      alert("Invalid action")
      this.router.navigate(["list-customer"]);
      return;
    }
    this.editForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ["", Validators.required],

    });
    this.apiService.getCustomerById(+customerId)
      .subscribe(data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.apiService.updateCustomer(this.editForm.value)
      .pipe(first())
      .subscribe(
        (data:any) => {
          if (data.status === 200) {
            alert('Customer updated successfully.');
            this.router.navigate(['list-customer']);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
