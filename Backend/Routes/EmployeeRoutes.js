// Employee Routes Creation
const express = require("express");
const router = express.Router();
const EmployeeController = require("../controller/Employeecontroller");

//Employee Section
router
  .route("/")
  .get(EmployeeController.getEmployee)
  .post(EmployeeController.CreateEmployee);

router
.route("/:id")
.get(EmployeeController.getEmployeeById)
.put(EmployeeController.updateEmployee)
.delete(EmployeeController.deleteEmployee)

module.exports = router;