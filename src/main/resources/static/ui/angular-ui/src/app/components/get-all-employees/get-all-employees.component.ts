import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.css']
})
export class GetAllEmployeesComponent {
  
  employees: any[] = []
  constructor(private employeeService: EmployeeService, private route: Router){}
  
  ngOnInit(){
   this.getAllEmployeeList();
  }

  getAllEmployeeList(){
    this.employeeService.getAllEmployees().subscribe((res)=>{
      console.log('All emps', res);
      this.employees = res;      
    })
  }

  goBack(){
    this.route.navigate(['/employee']);
  }
}
