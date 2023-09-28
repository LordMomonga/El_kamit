import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import router from "./routes/studentRoutes.js";
import routerMaitre from "./routes/maitreRouter.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import ScolaireRoute from "./routes/AnneScolaireRoute.js";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(helmet());
app.use('/teachers', routerMaitre);
app.use('/students', router);
//mon code secret
const secretKey ='unSuperCodeDifficile'

//const port = 5000;

const url = 'mongodb://127.0.0.1:27017/mydatabase'; // URL de connexion à la base de données

/*mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(port, () =>  console.log(`Server is running on port ${port}`));
}).catch ((error) => console.log(`${error} did not connect`));*/

//debut de l'api pour le maitre
const ProfSchema = new mongoose.Schema({
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
const Professeur = mongoose.model('Professeur', ProfSchema);

app.post('/Professeur', async (req, res) => {
    try {
        const newProfesseur = new Professeur(req.body);
    
        await newProfesseur.save();
        res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
        
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
        res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
        
    }
    
    })

    app.get('/Professeur', async (req, res) => {
        try {
            const professeurs = await Professeur.find();
            res.status(200).json(professeurs);
            console.log('ces quoi ca ');
        } catch (error) {
            console.log('Erreur lors de la récupération des professeurs :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des professeurs.' });
        }
    });
//devu du schema pour les cours
const CourSchema = new mongoose.Schema({
    NomCour:String,
    SalleClasse:String,
    ProfesseurCours:String,
    Horaire:String,
    DateCour:Date,
    DetailleCour:String,
})
const Cour = new mongoose.model('Cour', CourSchema);

app.post('/Cour', async(req, res) => {
    try {
        const newCour = new Cour(req.body)
        await newCour.save();
        res.status(201).json({ message: 'Cour enregistré avec succès.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
    }
})

    //debut des eevaluation 
  const EvaluationSchema = new mongoose.Schema({
    NomsEleves:String,
    Matiere:String,
    Note:String,
    NomExamen:String,
    AnneeScolaire: String,
    Appreciaton:String,

  });
  const Evaluation = mongoose.model('Evaluation', EvaluationSchema)

  app.post('/Evaluation', async(req, res) => {
    try {
        const NewEvaluation = new Evaluation(req.body);
        await NewEvaluation.save(); 
        res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
    
        
    }

  });
 
//00000000000.lDebut de l'api pour l'eleves
const EleveSchema = new mongoose.Schema({
  
    studentFullName:String,
       
      studentSurName:String,
      
      studentDateOfBirth: Date,
       
      studentLieu:String,
       
      studentLieuResidence:String,
      
      studentGender: {
        type: String,
        enum: ['Masculin', 'Feminin'],
      
      },
      studentClass: String, // Peut être modifié en fonction de la structure des classes
      parentFullName:  String,
       
      parentPhoneNumber: String,
      

      parentEmail: String,
      
      AnneScolaire:String,
      

});
const Eleve = mongoose.model('Eleve', EleveSchema);

app.post('/Eleve', async (req, res) => {
try {
    const newEleve = new Eleve(req.body);

    await newEleve.save();
    res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
    
} catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
    
}

})

app.get('/Eleve', async (req, res) => {
    try {
        const eleves = await Eleve.find();
        res.status(200).json(eleves);
    } catch (error) {
        console.error('Erreur lors de la récupération des élèves :', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des élèves.' });
    }
});

app.get('/Eleve/:studentSalle', async (req, res) => {
    const studentSalle = req.params.studentSalle;
    try {
        const eleves = await Eleve.find({ studentSalle: studentSalle });
        res.status(200).json(eleves);
    } catch (error) {
        console.error('Erreur lors de la récupération des élèves :', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des élèves.' });
    }
});

//Année scolaire
const ScolaireSchema = new mongoose.Schema({
year: String,
SalleDispo: [String],

})
const Scolaire = mongoose.model('scolaire', ScolaireSchema);

app.post('/scolaire', async(req, res) => {
    try {
        const newScolaire = new Scolaire({
            year: req.body.year,
            SalleDispo: req.body.SalleDispo,
        });
        await newScolaire.save();
        res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
        
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
        res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
        
    }
   
});

/*app.get('/scolaire/', async(req, res) => {
    try {
        const newScolaire = Scolaire.find()
        res.status(200).json(newScolaire)
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
   
})*/
app.get('/scolaire', async (req, res) => {
    try {
        const anneesScolaires = await Scolaire.find();
        res.status(200).json(anneesScolaires);
    } catch (error) {
        console.error('Erreur lors de la récupération des années scolaires :', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des années scolaires.' });
    }
});
app.get('/scolaire/:anneeScolaire', async (req, res) => {
    try {
      const anneeScolaire = req.params.anneeScolaire;
      // Recherchez les SalleDispo correspondants à l'année scolaire
      const salleDispo = await Scolaire.find({ year: anneeScolaire }).select('SalleDispo');
      if (!salleDispo) {
        return res.status(404).json({ message: 'Aucune année scolaire trouvée pour cette année.' });
        console.log('ce nes pas possible ');
      }
      res.status(200).json(salleDispo);
      console.log(salleDispo);
    } catch (error) {
      console.error('Erreur lors de la récupération des SalleDispo :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des SalleDispo.' });
    }
  });
  

//fin année Scolaire
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  status: { type: String, enum: ['Administrateur', 'Utilisateur']},
});



const User = mongoose.model('User', userSchema);

app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      password: req.body.email,
      status: req.body.status
    });

    await newUser.save();

    res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
  }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs.' });
    }
});
//pour pouvoir s'inscrire dans l'application
app.post('/register', async (req, res) => {
    try {
      const { name, password, status } = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ name });
  
      if (existingUser) {
        return res.status(400).json({ message: 'Cet utilisateur existe déjà' });
      }
  
      // Hash the password with Bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({ name, password: hashedPassword, status });
      await newUser.save();
  
      res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      res.status(500).json({ message: 'Erreur lors de l\'inscription.' });
    }
  });
   

  // ce qui faut pour gerer le login 

  app.post('/login', async (req, res) => {
    try {
      const { name, password } = req.body;
  
      // Find the user in the database
      const user = await User.findOne({ name });
  
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
  
      // Compare the password with Bcrypt
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Mot de passe incorrect' });
      }
  
      // Create a JWT token
      const token = jwt.sign({ userId: user._id, name: user.name, status: user.status }, secretKey, { expiresIn: '1h' });
  
      res.status(200).json({ token });
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      res.status(500).json({ message: 'Erreur lors de la connexion.' });
    }
  });
  //protected route 
 
  
   const verifyToken = async (req, res, next) => {

    try {
        let token = req.header("Authorization")

        if(!token) {
            return res.status(403).send("Access Denied")
        }
        if(token.startsWith("Bearer")) {
            token = token.slice(7, token.lenght).trimLeft();
        }
        const verified = jwt.verify(token, secretKey);
        req.user = verified;
        next();
        
    } catch (error) {
        res.status(500).json({error: err.message})
        
    }
  }
  
  
  app.get('/protected', verifyToken, (req, res) => {

    const { name, status } = req.user;
    res.json({ name, status });
  });


//ElkamitUser123
//mongodb+srv://ElkamitUser:<password>@cluster0.6w0dmgu.mongodb.net/?retryWrites=true&w=majorit

const PORT = process.env.PORT || 6001

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}).then(() => {
    app.listen(PORT, () =>  console.log(`Server is running on port ${PORT}`));
}).catch ((error) => console.log(`${error} did not connect`));
