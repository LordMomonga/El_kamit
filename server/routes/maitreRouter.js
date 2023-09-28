import express from 'express'
import Enseignant from '../models/enseignants.js'

const routerMaitre = express.Router()

routerMaitre.post('/Enseignant', async (req, res) => {
    try {
        const teacher = new Enseignant(req.body);
        await teacher.save()
        
        res.status(201).json(teacher)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

routerMaitre.get('/Enseignant', async (req, res) => {
    try {
        const teacher =  Enseignant.find();
       
        
        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default routerMaitre;
