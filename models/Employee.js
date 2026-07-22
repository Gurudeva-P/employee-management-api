const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Employee name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      enum: ["Engineering", "HR", "Sales", "Marketing", "Finance", "Operations", "Design"],
    },
    designation: {
      type: String,
      required: [true, "Designation is required"],
      trim: true,
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [0, "Salary cannot be negative"],
    },
    joiningDate: {
      type: Date,
      required: [true, "Joining date is required"],
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

employeeSchema.pre("save", async function (next) {
  if (this.employeeId) return next();
  const count = await mongoose.model("Employee").countDocuments();
  this.employeeId = `EMP${String(count + 1).padStart(4, "0")}`;
  next();
});

module.exports = mongoose.model("Employee", employeeSchema);
