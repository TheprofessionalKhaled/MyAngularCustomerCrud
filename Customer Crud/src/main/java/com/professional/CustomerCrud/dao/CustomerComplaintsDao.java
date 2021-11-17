package com.professional.CustomerCrud.dao;

import java.util.List;

import com.professional.CustomerCrud.entity.CustomerComplaints;
import com.professional.CustomerCrud.entity.Role;

public interface CustomerComplaintsDao {
	
	public List<CustomerComplaints> getComplaints();
	public void saveCustomerComplaints (CustomerComplaints theComplaint);
	public CustomerComplaints getComplaints(int theId);
	public void deleteCompaints(int theId);

}
