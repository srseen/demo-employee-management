import { Request, Response } from "express";
import employeeService from "../services/employeeService";

export class EmployeeController {
  async getAll(req: Request, res: Response) {
    const employees = employeeService.getAll();
    res.json(employees);
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const employee = employeeService.getById(id);
    if (!employee) res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  }

  async create(req: Request, res: Response) {
    const employeeData = req.body;
    const newEmployee = employeeService.create(employeeData);
    res.status(201).json(newEmployee);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const updateData = req.body;
    const updatedEmployee = employeeService.update(id, updateData);
    if (!updatedEmployee)
      res.status(404).json({ message: "Employee not found" });
    res.json(updatedEmployee);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const success = employeeService.delete(id);
    if (!success) res.status(404).json({ message: "Employee not found" });
    res.status(204).send();
  }
}

export default new EmployeeController();
