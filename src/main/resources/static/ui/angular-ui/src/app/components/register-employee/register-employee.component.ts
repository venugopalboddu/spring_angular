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
            console.log('Post response', res);
            this.postEmployeeForm.reset();            
        });
    } else {
        alert("All fields must be filled before submitting.")
    }
  }

  getAllEmp(){
    this.route.navigate(['/get-all-employees']);
  }
}
