import express from 'express'
import AnneScolaire from "../models/AnneScolaireModel.js";

const ScolaireRoute = express.Router();

ScolaireRoute.post("/anneescolaire", async (req, res) => {
    try {
        const { AnneeDate, SalleDispo } = req.body;
        const anneeScolaire = new AnneScolaire({ AnneeDate, SalleDispo });
        await anneeScolaire.save();
        res.status(201).json(anneeScolaire);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
ScolaireRoute.get("/anneescolaire", async (req, res) => {
    try {
        const anneesScolaires = await AnneScolaire.find();
        res.json(anneesScolaires);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default ScolaireRoute; 