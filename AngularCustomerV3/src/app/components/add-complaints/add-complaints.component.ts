import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Api2Service } from 'src/app/service/api2.service';

@Component({
  selector: 'app-add-complaints',
  templateUrl: './add-complaints.component.html',
  styleUrls: ['./add-complaints.component.css']
})
export class AddComplaintsComponent implements OnInit {

 

  addForm :FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router ,private api2Service:Api2Service) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id : [],
      name : ["",Validators.required],
      complaints : ["",Validators.required],
     
    });
  }

  onSubmit(){
    this.api2Service.createComplaint(this.addForm.value).subscribe(
      data => {
        this.router.navigate(["list-complaint"]);
      }
    )
  }

}
