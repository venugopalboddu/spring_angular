package com.spring.employee_system.service;

import com.spring.employee_system.entity.Employee;
import com.spring.employee_system.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public Employee postEmployee(Employee employee){
        return employeeRepository.save(employee);
    }
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

}
