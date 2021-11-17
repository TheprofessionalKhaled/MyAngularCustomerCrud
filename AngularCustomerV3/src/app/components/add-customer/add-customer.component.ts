import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addForm :FormGroup;
  constructor(private formBuilder:FormBuilder,private apiService :ApiService,private router :Router) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id : [],
      firstName : ["",Validators.required],
      lastName : ["",Validators.required],
      email : ["",Validators.required]
    });
  }

  onSubmit(){
    this.apiService.createCustomer(this.addForm.value).subscribe(
      data => {
        this.router.navigate(["list-customer"]);
      }
    )
  }

}
