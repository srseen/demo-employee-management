import express from "express";
import employeeRoutes from "./routes/employeeRoutes";

const app = express();

app.use(express.json());
app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

export default app;
