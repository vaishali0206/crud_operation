const emp = require("../Model/emp");


   const getEmps = async (req, res) => {
    try {
      const employees = await emp.find();
      res.json(employees);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
  };
  const getEmpByID = async (req, res) => {
    try {
        const id = req.params.empID;
      const employee = await emp.findById(id);
      res.json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
  };
  const createEmp =async (req, res) => {
    const employee = new emp({
      name: req.body.name,
      email: req.body.email,
      salary: req.body.salary,
      joiningDate:req.body.joiningDate,
      department:req.body.department
    });
    try {
        const savedEmployee = await employee.save();
        res.json(savedEmployee);
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    // Save the instance using promises
     };
     const updateEmp = async(req, res) => {
        try {
            const id = req.params.empID;
            const updatedData = req.body;
            const options = { new: true };
    
            const result = await emp.findByIdAndUpdate(
                id, updatedData, options
            )
    
            res.json(result);
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
      };
      const deleteEmp =async (req, res) => {
        try {
            const id = req.params.empID;
            const data = await emp.findByIdAndDelete(id)
            res.json(data)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
      }; 
  module.exports = {
    getEmps,getEmpByID,createEmp,updateEmp,deleteEmp
  };
  