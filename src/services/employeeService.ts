import { Employee } from "../types/Employee";

export class EmployeeService {
  private employees: Employee[] = [];
  private nextId: number = 1;

  getAll(): Employee[] {
    return this.employees;
  }

  getById(id: number): Employee | undefined {
    return this.employees.find((e) => e.id === id);
  }

  create(employeeData: Omit<Employee, "id">): Employee {
    const newEmployee: Employee = {
      id: this.nextId++,
      ...employeeData,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  update(
    id: number,
    updateData: Partial<Omit<Employee, "id">>
  ): Employee | null {
    const employee = this.getById(id);
    if (!employee) return null;
    Object.assign(employee, updateData);
    return employee;
  }

  delete(id: number): boolean {
    const index = this.employees.findIndex((e) => e.id === id);
    if (index === -1) return false;
    this.employees.splice(index, 1);
    return true;
  }
}

export default new EmployeeService();
