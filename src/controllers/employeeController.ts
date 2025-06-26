import e, { Request, Response } from "express";

export class EmployeeController {
  async getAll(req: Request, res: Response) {}
  async getById(req: Request, res: Response) {}
  async create(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}

export default new EmployeeController();
