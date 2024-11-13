import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  id: number = this.activatedRoute.snapshot.params['id'];
  updateEmployeeForm!: FormGroup;
  
  constructor(private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb:FormBuilder, private route: Router){}

    ngOnInit(){
      this.updateEmployeeForm = this.fb.group({
        name: [null, [Validators.required]],
        email: [null, [Validators.required]],
        phone: [null, [Validators.required]]
      })
      this.getEmployeeById();
    }

    getEmployeeById(){
      this.employeeService.getEmployeeById(this.id).subscribe((res)=>{
        this.updateEmployeeForm.patchValue(res);
      })
    }

    updateEmployee(){
      this.employeeService.updateEmployee(this.id, this.updateEmployeeForm.value).subscribe((res)=>{
        if(res.id != null){
          this.route.navigate(['/get-all-employees']);
        }                
      })
    }

    getAllEmp(){
      this.route.navigate(['/get-all-employees']);
    }
}
