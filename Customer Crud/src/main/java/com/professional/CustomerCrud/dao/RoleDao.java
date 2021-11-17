package com.professional.CustomerCrud.dao;

import java.util.List;

import com.professional.CustomerCrud.entity.Role;


public interface RoleDao {
	public List<Role> getRole();
	public void saveRole (Role theRole);
	public Role getRole(int theId);
	public void deleteRole(int theId);
}
