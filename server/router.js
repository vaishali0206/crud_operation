const router = require("express").Router();
//const { getEmps } = require("./Controller/emp");
const { getEmps,getEmpByID, createEmp,updateEmp,deleteEmp } = require("./Controller/emp");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});
router.get("/getAll", getEmps);
router.get("/getEmpByID/:empID", getEmpByID);
router.post("/add", createEmp);
router.put("/edit/:empID", updateEmp);
router.delete("/delete/:empID", deleteEmp);
module.exports = router;