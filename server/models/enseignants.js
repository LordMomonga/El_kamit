import mongoose from "mongoose";

const enseignantSchema = new mongoose.Schema({
    maitreFullName:String,
  maitreSurName:String,

  maitreGender: { type: String, enum: ['Masculin', 'Feminin'], },
  maitreAddress: String,
  maitreClass: String,
  maitreStatut: String,
  AdresseResidence: String,
  maitreNumber: String,
 
  anneeScolaire:String,
  dernierDiplome: String,
  
});

const Enseignant = mongoose.model('Enseignant', enseignantSchema);

export default Enseignant;