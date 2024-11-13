package com.spring.employee_system.controller;

import com.spring.employee_system.entity.Employee;
import com.spring.employee_system.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }
    @GetMapping("/employee/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
      Employee employee = employeeService.getEmployeeById(id);
      if(employee == null)
          return ResponseEntity.notFound().build();
      return ResponseEntity.ok(employee);
    }
    @PutMapping("/employee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        Employee existingEmployee = employeeService.getEmployeeById(id);
        if(existingEmployee == null)
            return ResponseEntity.notFound().build();
        existingEmployee.setName(employee.getName());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setPhone((employee.getPhone()));
        Employee updateEmployee = employeeService.updateEmployee(existingEmployee);
        return ResponseEntity.ok(updateEmployee);
    }
    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
        Employee existingEmployee = employeeService.getEmployeeById(id);
        if(existingEmployee == null)
            return ResponseEntity.notFound().build();
          employeeService.deleteEmployee(id);
          return  ResponseEntity.ok().build();
    }
}
