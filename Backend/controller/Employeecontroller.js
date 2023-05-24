const Emp = require("../Model/EmployeeModel");

exports.getEmployee = async(req,res)=>{

  let SortBy = req.query.Sort;
  let Order = req.query.SortOrder;
  let Sort = {}
  if(SortBy && Order){
     Sort[SortBy] = Order === 'asc' ? 'asc' : 'desc';
  } 

  let {designation} = req.query
   let query = {};

   if(designation){
    query.designation = { $regex: new RegExp(designation, "i") };
   }


    try {
        const Employee = await Emp.find(query).sort(Sort).lean();
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