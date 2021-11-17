package com.professional.CustomerCrud.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="customercomplaints")
public class CustomerComplaints {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	
	public CustomerComplaints() {
		
	}

	@Column(name="name")
	private String name;
	
	@Column(name="complaints")
	private String complaints;
	public CustomerComplaints(int id, String name, String complaints) {
		super();
		this.id = id;
		this.name = name;
		this.complaints = complaints;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getComplaints() {
		return complaints;
	}

	public void setComplaints(String complaints) {
		this.complaints = complaints;
	}

	
	


}
