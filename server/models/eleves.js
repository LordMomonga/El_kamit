import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
   
    studentFullName: {
      type: String,
      required: true,
    },
    studentSurName: {
      type: String,
      required: true,
    },
    studentDateOfBirth: {
      type: Date,
      required: true,
    },
    studentLieu: {
      type: String,
      required: true,
    },
    studentLieuResidence: {
      type: String,
      required: true,
    },
    studentGender: {
      type: String,
      enum: ['Masculin', 'Féminin'],
      required: true,
    },
    studentClass: {
      type: String, // Peut être modifié en fonction de la structure des classes
      required: true,
    },
    parentFullName: {
      type: String,
      required: true,
    },
    parentPhoneNumber: {
      type: String,
      required: true,
    },
    parentEmail: {
      type: String,
    },
    AnneScolaire: {
      type:String,
      required: true,
    }
    // Ajoutez d'autres champs ici
  });

  const Student = mongoose.model('Student', studentSchema);

export default Student;