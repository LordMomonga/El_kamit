import mongoose from "mongoose";

const AnneScolaireSchema = new mongoose.Schema(
    {
        AnneeDate: {
        type: String,
        required: true,
    },
    SalleDispo: {
        type: [String],
        default: [],

    }
}
);
const AnneScolaire = mongoose.model("AnneScolaire", AnneScolaireSchema);

export default AnneScolaire;