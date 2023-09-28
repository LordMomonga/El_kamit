import express from "express";
import Student from '../models/eleves.js';

const router = express.Router();


//route pour creer un nouvelle eleves 
router.post('/students', async (req, res) => {
    try {
        const student = new Student(req.body);

        await student.save();
        res.status(201).json(student);
        
    } catch (error) {
        res.status(400).json({ error: error.message });
        
    }
})
//route pour recuperer tous les eleves 
router.get('/students', async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);
        
    } catch (error) {
        res.status(500).json({ error: error.message});
        
    }
});

export default router;