import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent {

  postEmployeeForm!: FormGroup;
  errorMsg:boolean = false;
  successMsg: boolean = false;

  constructor(private employeeService: EmployeeService, 
    private fb:FormBuilder, private route: Router){}

  ngOnInit(){
    this.postEmployeeForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]]
    })
  }
   
  saveRegister() {    
    const formValues = this.postEmployeeForm.value;
    const allFieldsFilled = Object.values(formValues).every(value => value !== null && value !== '')
    if (allFieldsFilled) {
        this.employeeService.registerEmployee(formValues).subscribe((res) => {
            this.postEmployeeForm.reset();
            this.successMsg = true;
            this.errorMsg = false;           
        });
    } else {
       this.errorMsg = true;
       this.successMsg = false;
    }
  }
  
  errorCls(){
    this.errorMsg = false;
    this.successMsg = false;
  }

  getAllEmp(){
    this.route.navigate(['/get-all-employees']);
  }
}
