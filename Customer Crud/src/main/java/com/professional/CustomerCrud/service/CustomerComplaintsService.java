package com.professional.CustomerCrud.service;

import java.util.List;

import com.professional.CustomerCrud.entity.CustomerComplaints;


public interface CustomerComplaintsService {
public List<CustomerComplaints> findAll();
	
	public CustomerComplaints findById(int theId);
	
	public void save(CustomerComplaints theCustomerComplaint);
	

	
	public void deleteById(int theId);

}
