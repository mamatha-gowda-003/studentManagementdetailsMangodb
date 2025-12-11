const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// CREATE
router.post("/add", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send({ message: "Student added" });
});

// READ
router.get("/", async (req, res) => {
    const data = await Student.find();
    res.send(data);
});

router.get("/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.send(student);
});

// UPDATE
router.put("/update/:id", async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "Student updated" });
});

// DELETE
router.delete("/delete/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send({ message: "Student deleted" });
});

module.exports = router;
