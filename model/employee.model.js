import mongoose from "mongoose";

const Schema = mongoose.Schema;

// schema for employee

const employeeSchema = new Schema({

  // email, surnam and fristname are the data needed in the document and they are all required
  
  email: { type: String, required: true },
  surname: { type: String, required: true },
  firstName: { type: String, required: true },
});

const employeeModel = mongoose.model("Employee", employeeSchema);
export default employeeModel
