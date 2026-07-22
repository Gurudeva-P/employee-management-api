const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");
const { protect } = require("../middleware/auth");

const employeeValidation = [
  body("name").trim().notEmpty().withMessage("Employee name is required"),
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("phone")
    .matches(/^[6-9]\d{9}$/)
    .withMessage("Please enter a valid 10-digit phone number"),
  body("department")
    .notEmpty()
    .withMessage("Department is required")
    .isIn(["Engineering", "HR", "Sales", "Marketing", "Finance", "Operations", "Design"])
    .withMessage("Invalid department. Choose from: Engineering, HR, Sales, Marketing, Finance, Operations, Design"),
  body("designation").trim().notEmpty().withMessage("Designation is required"),
  body("salary")
    .isNumeric()
    .withMessage("Salary must be a number")
    .custom((val) => val >= 0)
    .withMessage("Salary cannot be negative"),
  body("joiningDate").isISO8601().withMessage("Please enter a valid joining date (YYYY-MM-DD)"),
  body("status")
    .optional()
    .isIn(["Active", "Inactive"])
    .withMessage("Status must be either Active or Inactive"),
];

router.use(protect);

router.route("/").get(getAllEmployees).post(employeeValidation, createEmployee);
router.route("/:id").get(getEmployeeById).put(employeeValidation, updateEmployee).delete(deleteEmployee);

module.exports = router;
