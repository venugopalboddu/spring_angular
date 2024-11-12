package com.spring.employee_system.controller;

import com.spring.employee_system.entity.Employee;
import com.spring.employee_system.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmployeeController {
    private final EmployeeService employeeService;
    @PostMapping("/employee")
    public Employee postEmployee(@RequestBody Employee employee){
        return employeeService.postEmployee(employee);
    }
    @GetMapping("/all-employees")
    private List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

}
