import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { GetAllEmployeesComponent } from './components/get-all-employees/get-all-employees.component';

const routes: Routes = [
  {path: 'employee', component: RegisterEmployeeComponent},
  {path: '', component: RegisterEmployeeComponent},
  {path: 'get-all-employees', component: GetAllEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
