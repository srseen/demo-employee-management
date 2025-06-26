import request from "supertest";
import app from "../src/app";

describe("Employee API", () => {
  let createdId: number;

  it("POST /employees - สร้างพนักงานใหม่", async () => {
    const res = await request(app).post("/employees").send({
      firstName: "Somchai",
      lastName: "Sukjai",
      role: "Developer",
      department: "IT",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    createdId = res.body.id;
  });

  it("GET /employees - ดึงพนักงานทั้งหมด", async () => {
    const res = await request(app).get("/employees");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("GET /employees/:id - ดึงพนักงานโดย id", async () => {
    const res = await request(app).get(`/employees/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createdId);
  });

  it("PUT /employees/:id - แก้ไขข้อมูลพนักงาน", async () => {
    const res = await request(app)
      .put(`/employees/${createdId}`)
      .send({ role: "Senior Developer" });
    expect(res.statusCode).toBe(200);
    expect(res.body.role).toBe("Senior Developer");
  });

  it("DELETE /employees/:id - ลบพนักงาน", async () => {
    const res = await request(app).delete(`/employees/${createdId}`);
    expect(res.statusCode).toBe(204);
  });

  it("GET /employees/:id - ดึงพนักงานที่ถูกลบ", async () => {
    const res = await request(app).get(`/employees/${createdId}`);
    expect(res.statusCode).toBe(404);
  });
});
