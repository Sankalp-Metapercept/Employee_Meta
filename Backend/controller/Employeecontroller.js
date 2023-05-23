const Emp = require("../Model/EmployeeModel");

exports.getEmployee = async(req,res)=>{
    try {
        const Employee = await Emp.find()
        console.log(Employee);
        return res
        .status(200)
        .json({
            Status : "success",
            result : Employee.length,
            data : Employee,
        })
    } catch (error) {
        return res
      .status(404)
      .json({
            Status : "error",
            message : error.message,
        })
    }
}

exports.getEmployeeById = async (req, res) => {
    try {
      const id = req.params.id;
      const EmployeeById = await Emp.findById(id);
      res.status(200).json({
        status: "Success",
        result: EmployeeById.length,
        data: EmployeeById ,
      });
    } catch (err) {
      console.log(err);
      return res.status(404).json({
        status: "Error",
        message: "Invalid EmployeeById Status",
      });
    }
};

exports.CreateEmployee = async (req, res) =>{
    try {
      const NewEmployee = await Emp.create(req.body);
      console.log(NewEmployee);
      return res
      .status(201)
      .json({
        status: "Success",
        data: NewEmployee,
      });
    } catch (error) {
      return res
      .status(404)
      .json({
        status: "Error",
        message: "Invalid Data",
      });
    }
};

exports.updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const Employee = await Emp.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "Success",
      data: Employee,
    });
  } 
  catch (err) {
    console.log(err);
    return res.status(404).json({
      status: "Error",
      message: "Invalid Product",
    });
  }
};


exports.deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const Employee = await Emp.findByIdAndRemove(id, req.body);
    res.status(200).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      status: "Error",
      message: "Invalid Employee",
    });
  }
};