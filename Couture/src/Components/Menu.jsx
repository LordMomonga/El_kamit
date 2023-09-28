import React from 'react'
import {Dash, Navigate} from './constants'
import { Busee, student } from '../assets'
import { useState } from 'react'
import { teacher } from '../assets'
import { close } from '../assets'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { date } from 'yup'

const Menu = () => {
    //l'ensemble des données pour le maitre 
    const [nameMaitre, setNameMaitre] = useState('');
    const [SurnameMaitre, setSurNameMaitre] = useState('');
   
 
    const [LieuResidenceMaitre, setLieuResidenceMaitre] =useState('');
    const [salleAffectMaitre, setSalleAffectMaitre] = useState('');
    const [genreMaitre, setGenreMaitre] =useState('');
    const [Statut, setStatut] = useState('');
    const [numeroMaitre, setNumeroMaitre] = useState('');
    const [emailMaitre, setEmailMaitre] = useState('');
    const [AnneeMaitre, setAnneeMaitre] = useState('');
    const [Diplome, setDiplome] = useState('');
    
     //traitement des données des professeurs
     const handleInscriptionProf = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/Professeur', {
                maitreFullName:nameMaitre,
                maitreSurname:SurnameMaitre,
                maitreGender:genreMaitre,
                maitreAdresse:emailMaitre,
                maitreClass:salleAffectMaitre,
                maitreStatut:Statut,
                AdresseRedidence:LieuResidenceMaitre,
                maitreNumber:numeroMaitre,
                anneeScolaire:AnneeMaitre,
                dernierDiplome:Diplome,
            });
            console.log('données ennregistrer', response.data);
            setShowMaitre(false);
            setReussi(true);
            setNameMaitre('');
            setSurNameMaitre('')
            setGenreMaitre('')
            setEmailMaitre('')
            setSalleAffectMaitre('')
            setLieuResidenceMaitre('')
            setNumeroMaitre('')
            setAnneeMaitre('')
            setDiplome('')
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement :', error);
            
        }
    }


    //l'ensemble des données à enregistrer pour l'inscription des eleves 
    const [nameEleve, setNameEleve] = useState('');
    const [Surname, setSurName] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [LieuNaissance, setLieuNaissance] = useState('');
    const [LieuResidence, setLieuResidence] =useState('');
    const [salleAffect, setSalleAffect] = useState('');
    const [genre, setGenre] =useState('');
    const [parentName, setParentName] = useState('');
    const [numeroParent, setNumeroParent] = useState('');
    const [emailParent, setEmailParent] = useState('');
    const [Annee, setAnnee] = useState('');
    const [donneesAnneeSelectionnee, setDonneesAnneeSelectionnee] = useState(null);
   



    //fin des données
   
    //Traitement des donnée de l'eleves
    const handleInscriptionEleves = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/Eleve', {
                studentFullName:nameEleve,
                studentSurName: Surname,
                studentDateOfBirth: dateNaissance,
                studentLieu: LieuNaissance,
                studentLieuResidence: LieuResidence,
                studentGender: genre,
                studentClass: salleAffect,
                parentFullName: parentName,
                parentPhoneNumber: numeroParent,
                parentEMail: emailParent,
                AnneScolaire: choixAnnee,



                
            });
            console.log('Données enregistrées :', response.data);
            setReussi(true);
            setIsModalOpen(false)
            setNameEleve('')
            setSurName('')
            setDateNaissance('')
            setLieuNaissance('')
            setLieuResidence('')
            setGenre('')
            setSalleAffect('')
            setParentName('')
            setNumeroParent('')
            setEmailParent('')
            setAnnee('')
            setChoixAnnee('')

            
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement :', error);
            
        }
    }

    //fin de traitement des données de l'eleves 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const[isYears, setIsYears] = useState(false);
    const [anneeInscrit, setAnneeInscrit] = useState(false);
    const [voirClass, setVoirClass] = useState(false);
    const [nombre, setNombre] = useState('')
    const [number, setNumber] = useState(0);
    const [inputValues, setInputValues] = useState(['']);
    const [AnneeScolaire, setAnneeScolaire] = useState('');
    const [anneesScolaires, setAnneesScolaires] = useState([]);
    const [salleDispo, setSalleDispo] = useState([]);
    const [Values, setValues] = useState(['']);
    const [reussi, setReussi] = useState(false);
    const [showMaitre, setShowMaitre] = useState(false);
    const [showm, setShowm] = useState(false);
    const [choixAnnee, setChoixAnnee] = useState('')
    const [sall, setSall] = useState([])
    
    useEffect(() => {
        // Effectuez la requête GET vers votre endpoint /scolaire
        axios.get('http://localhost:5000/scolaire')
          .then(response => {
            // Mettez à jour l'état local avec les données récupérées
            setAnneesScolaires(response.data);
            console.log('tout est bon');

          })
          .catch(error => {
            console.log('Erreur lors de la récupération des années scolaires :', error);
          
          });
      }, []); // Le tableau vide en second argument indique que cela ne doit être exécuté qu'une seule fois lors du chargement initial
    
    
    //por la selection de la salle 
    useEffect(() => {
        // Lorsque l'année scolaire sélectionnée change, obtenir les SalleDispo correspondants
        if (choixAnnee) {
          axios.get(`http://localhost:5000/scolaire/${choixAnnee}`)
            .then((response) => {
              setSall(response.data);
              console.log('tout est bon mon pote');
            })
            .catch((err) => {
              setError('Erreur lors de la récupération des SalleDispo.');
              console.log('Erreur lors de la récupération des SalleDispo.');
              console.error(err); // Afficher l'erreur dans la console
            });
        } else {
          // Réinitialiser les SalleDispo si aucune année n'est sélectionnée
          setSall('NONE');
        }
      }, [choixAnnee]);

    //fin de la selection de la salle 
    useEffect(() => {
        let timerld;
        if(reussi) {
            timerld = setTimeout(() => {
                setReussi(false);
            }, 1000)
        }
        return () => {
            clearTimeout(timerld);
        };
    }, [reussi])

    const handleChange =(index, value) => {
        const updatedValues = [...Values];
        updatedValues[index] = value;
        setValues(updatedValues);
    }


    


    //pour l'année Scolaire
    const handleInscrit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/scolaire', {
                year:AnneeScolaire,
                SalleDispo: Values,
                
            });
            console.log('Données enregistrées :', response.data);
            setAnneeScolaire('');
            setValues(['']);
            setIsYears(false);
            setReussi(true);
            
            
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement :', error);
            
            
        }
    }
    const handleNumInputChange = (event) => {
        const num = parseInt(event.target.value);
        setNumber(num);
        setValues(Array(num).fill(''));
    };
    const handleInputValueChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues)
    }

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

  return (
    <div className='w-full ' >
        <Navigate />
        <Dash />
        <div className='text-black md:ml-[280px]   mx-5  '>
           
           {showm && 
           
           (
            <div className='absolute inset-x-1/4 w-1/2 px-10'>
                <img src={close} alt="" className='ml-auto  ' onClick={() => setShowm(false)}/>
                 <div className='   pb-5  px-10 text-center shadow-md flex flex-col bg-gray-600 rounded-xl'>
                
                <label htmlFor="" className='text-white mt-5 mb-2'> Pour l'année Scolaire: </label>
                <input type="text" placeholder="20XX-20XY" className=' text-center p-2 border rounded-md shadow-md  '
                value={choixAnnee}
                onChange={(e) => setChoixAnnee(e.target.value)}
                />
                <div>
                <button className='p-2 bg-green-500 mt-5 rounded-md text-white w-1/2 hover:text-gray-600 ' onClick={(e) => {
                    e.preventDefault()
                    setIsModalOpen(true)
                setShowm(false)
                }}>valider</button>
                </div>
                
            </div>
    
            </div>
           
           )}
           

            {reussi && (
                <div className='absolute  inset-x-1/4 text-center'>
                    <div className='bg-green-400 p-5 rounded-xl text-white font-semibold '>
                       Operation Reussi
                    </div>
         
                </div>
            )}
            {showMaitre && (
                <div className=' modal absolute inset-x-1/4 px-10 text-white'>
                    <img src={close} className='relative ml-auto' onClick={() => setShowMaitre(false)} />
                    <div className=' mx-5 modal-content rounded-lg  bg-gray-600 opacity-80 pb-5'>
                        <h2 className='text-center text-xl border-b-[2px] pb-2 pt-6 '>Ajouter nouveau maitre</h2>
                        <form action="" onSubmit={handleInscriptionProf}>
                            <div className='mt-5 flex flex-raw justify-around text-gray-600'>
                                <div className='flex flex-col'>
                                <label htmlFor="">Nom:</label>
                                <input type="text" className='p-2 rounded-md ' placeholder='Nom maitre'
                                value={nameMaitre}
                                onChange={(e) => setNameMaitre(e.target.value)}
                                />

                                </div>
                                <div className='flex flex-col'>
                                <label htmlFor="">Prenom:</label>
                                <input type="text" className='p-2 rounded-md ' placeholder='Prenom Maitre' 
                                value={SurnameMaitre}
                                onChange={(e) => setSurNameMaitre(e.target.value)}
                                />
                                

                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="">votre Sex: </label>
                                    <select name="" id="" className='border p-2 rounded-md ' 
                                    value={genreMaitre}
                                    onChange={(e) => setGenreMaitre(e.target.value)}
                                    >
                                        <option value="">genre</option>
                                        <option value="Masculin">Masculin</option>
                                        <option value="Feminin">Feminin</option>
                                    </select>
                                </div>
                                
                                
                            </div>
                            <div className='mt-5 flex justify-around flex-raw '>
                                <div className='flex flex-col '>
                                    <label htmlFor="" className=''>Adresse Mail:</label>
                                    <input type="email" className='p-2 rounded-md text-gray-600' placeholder='maitre@gmail.com'
                                    value={emailMaitre}
                                    onChange={(e) => setEmailMaitre(e.target.value)}
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className=''>Salle affecté</label>
                                    <select name="" id="" className='p-2 rounded-md text-gray-600'
                                    value={salleAffectMaitre}
                                    onChange={(e) => setSalleAffectMaitre(e.target.value)}
                                    >
                                        <option value="">Classe affecté</option>


                                    </select>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className=''>Statut</label>
                                    <select name="" id="" className='p-2 rounded-md text-gray-600'
                                    value={Statut}
                                    onChange={(e) => setStatut(e.target.value)}
                                    >
                                        <option value="">Statut</option>
                                        <option value="Administrateur">Administrateur</option>
                                        <option value="Utilisateur">Utilisateur</option>


                                    </select>
                                </div>
                            </div>
                            <div className='flex flex-raw justify-around pl-6 mt-5'>
                                <div>
                                    <label htmlFor="">Lieu de Residence:</label>
                                    <input type="text" placeholder='votre lieu de residence' className='p-2 rounded-md text-gray-600' 
                                    value={LieuResidenceMaitre}
                                    onChange={(e) => setLieuResidenceMaitre(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Numero de telephone</label>
                                    <input type="text" placeholder='6xxxxxxxx' className='p-2 rounded-md text-gray-600' 
                                    value={numeroMaitre}
                                    onChange={(e) => setNumeroMaitre(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Dernier Diplome Obtenu</label>
                                    <input type="text" placeholder='Dernier Diplome' className='p-2 rounded-md text-gray-600'
                                    value={Diplome}
                                    onChange={(e) => setDiplome(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col mt-5 px-5 items-center'>
                                <div>
                                    
                                </div>
                                <label htmlFor="">Année Scolaire:</label>
                                <input type="text" placeholder='20XX-20XY' className='p-2 rounded-md w-1/4 text-gray-600'
                                value={AnneeMaitre}
                                onChange={(e) => setAnneeMaitre(e.target.value)}
                                
                                />
                            </div>
                            <div className='text-center mt-10'>
                                <button className='p-2 bg-green-500 test-white rounded-md' type='submit'>Enregistrer</button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        
        {isModalOpen && (
        <div className="modal absolute x-1/2 inset-x-1/4 px-10 ">
            <img src={close} className='relative ml-auto' onClick={closeModal} />
          <div className="modal-content  bg-gray-800 mx-5 text-opacity-100 text-white pb-5 opacity-80 rounded-lg">
            <h2 className='text-xl text-white text-center border-b-[2px] mx-[200px] py-4 '>Formulaire d'inscription </h2>
            <form className='bg-gray-800 mt-10' onSubmit={handleInscriptionEleves}>
                <div className='flex flex-raw justify-around mb-10'>
                    <div className='flex flex-col'>
                    <label htmlFor="">noms</label>
                <input type="text" className='p-2 rounded-md text-gray-600' placeholder="nom de l'élèves "
                value={nameEleve}
                onChange={(e) => setNameEleve(e.target.value)}
                />

                    </div>
                
                    <div className='flex flex-col'>
                    <label htmlFor="">Prenoms</label>
                <input type="text" className='p-2 rounded-md text-gray-600' placeholder="Prenom de l'élèves "
                value={Surname}
                onChange={(e) => setSurName(e.target.value)}
                />

                    </div>

               <div className='flex flex-col'>
                    <label htmlFor="">Date de naissance</label>
                <input type="date" className='p-2 rounded-md text-gray-600' placeholder="Prenom de l'élèves "
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
                />

                    </div>
                  

                </div>
                <div className='flex flex-raw justify-around mb-10'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""> Lieu de naissance:</label>
                        <input type="text " placeholder='lieu de naissance' className='p-2 rounded-md text-gray-600' 
                        value={LieuNaissance}
                        onChange={(e) => setLieuNaissance(e.target.value)}
                        />

                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""> lieu de Residence :</label>
                        <input type="text " placeholder='lieu de naissance' className='p-2 rounded-md text-gray-600' 
                        value={LieuResidence}
                        onChange={(e) => setLieuResidence(e.target.value)}
                        />

                    </div>
                   
                  
                   
                        
                 </div>
                 <div className='flex flex-raw   justify-around mb-10'>
                 <div className=' gap-2 flex flex-col'>
                        <label htmlFor=""> Genre :</label>
                       <select name="" id="" className='p-2 rounded-md text-gray-600'
                       value={genre}
                       onChange={(e) => setGenre(e.target.value)}>
                       <option value="">Selectionner le genre</option>
                        <option value="Masculin">Masculin</option>
                        <option value="Feminin">Feminin</option>
                       </select>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor=""> Classe Affecté</label>
                        <select name="" id="" className='p-2 rounded-md text-gray-600'
                        value={salleAffect}
                        onChange={(e) => setSalleAffect(e.target.value)}
                        >
                            <option value="">selectionner la classe</option>
                            {sall.map((annee) => (
                                <option value={annee} className='text-gray-600'>{annee}</option>
                            ))}

                        </select>
                    </div>


                 </div>
                 <div className='flex flex-raw justify-around'>
                    <div className='flex flex-col '>
                        <label htmlFor=""> Nom parent:</label>
                        <input type="text" placeholder='entrer le numero du parent' className='p-2 rounded-md text-gray-600'
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                    <label htmlFor=""> Numero parent:</label>
                        <input type="text" placeholder='entrer le numero du parent' className='p-2 rounded-md text-gray-600' 
                        value={numeroParent}
                        onChange={(e) =>setNumeroParent(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Adresse Email</label>
                        <input type="email" placeholder='parent@gmail.com'  className='rounded-md p-2 text-gray-600'
                        value={emailParent}
                        onChange={(e) => setEmailParent(e.target.value)}
                        />
                    </div>

                 </div>
                            {/* <div className='flex flex-col mt-5 px-5 items-center'>
                <label htmlFor="">Année Scolaire</label>
                <input type="text" placeholder='20XX-20XY'  className='rounded-md p-2 text-center w-1/2 text-gray-600'
                value={Annee}
                onChange={(e) => setAnnee(e.target.value)}
                />
            </div> */}
                            
                <div className='mt-5 text-center mb-5 '>
                    <button className='p-2 bg-blue-500 rounded-md w-1/4' type='submit'>Inscrire</button>
                </div>
                 <div>

                 </div>
              
            </form>
          </div>
        </div>
      )}
        {isYears && (
            <div>
                 <div className=''>
                    <img src={close} alt="" className='relative ml-auto'  onClick={() => setIsYears(false)}/>
                </div>
                  <div className=' opacity-80 rounded-lg bg-gray-800 mx-5 text-white'>
               
                <h1 className='text-center border-b-[2px] pb-3 pt-5'>Generer une nouvelle année Scolaire </h1>
                <form onSubmit={handleInscrit}>
                
                <div className='mt-10 text-center'>
                    <label htmlFor=""> Année Scolaire: </label>
                <input type="text" placeholder="20XX - 20XY " className='rounded-md p-2 text-center text-gray-600'
                value={AnneeScolaire}
                onChange={(e) => setAnneeScolaire(e.target.value)} 
                required
                />

                </div>
                <div className='mt-10 text-center'>
                    <label htmlFor=""> Nombre de Salle Disponible: </label>
                <input type="text" placeholder="X Salles " className='rounded-md p-2 text-center text-gray-500 '
                value={number} 
                onChange={handleNumInputChange}
                
                />
                <button className='p-2 bg-green-500 rounded-md ml-10 hover:font-bold ' onClick={(e) => {
                    e.preventDefault()
                    setVoirClass(!voirClass)}}>valider</button>

                </div>
                {voirClass && (
                      <div className='flex flex-col p-2 gap-2'>
                             {Values.map((value, index) => ( 
                          <input type="text" 
                          key={index} 
                          value={value}
                          onChange={(e) => handleChange(index, e.target.value)}
                          placeholder={`Classe ${index + 1}`}
                          className='p-2 rounded-md w-1/4 ml-auto text-gray-600'
                          />
                      ))}
                        
                     
                  </div>

                )}
                <div className='text-center py-5'>
                
                <button type="submit" className='p-2 bg-blue-500 w-1/5 rounded-md'  onClick={(isYears) => {
                    setVoirClass(!voirClass)
                    setValues([...Values])}}>Enregistrer</button>

                </div>
               
             </form>  
            </div>
            
            </div>
          
        )}
                
            
           
            <div className=' md:flex '>
               <img src={Busee} alt="" className='  md:w-1/2'/> 
               
             
               <div className=' md:w-1/2 mt-5 '>

                <p className='text-center font-semibold md:text-xl text-green-500 border-b-[2px] pb-2  '>Empowering Growth, Inspiring Dreams, Lighting the Way.</p>
                <div className='mt-10'>
                    <p className='text-center mt-5 text-gray-600 font-semibold border-b-[3px] pb-5'>Admin place </p>
                    <div className='flex flex-col justify-center'>
                        <button className='p-2 bg-white shadow-md shadow-gray-400 rounded-lg mt-5 font-semibold text-gray-600 hover:bg-gray-400 hover:text-white' onClick={()=> setIsYears(!isYears)}>Generer nouvelle année Scolaire </button>
                        
                    </div>
                </div>


               
                <div className='flex flex-grow justify-around p-5 mx-5' >
                

                <div className='w-1/3 mt-10 p-3 '>
                <p className='text-center font-semibold  mb-8 text-gray-600 border-b-[3px] pb-2'>Student Place</p>
                <img src={student} alt="" className=' flex justify-center shadow-md px-3 mb-5' />
                <div className='flex flex-col gap-5'>
                <button onClick={(e) => {
              
                    setShowm(true)}} className='p-2 bg-blue-500  rounded-xl text-white shadow-md shadow-gray-300 hover:bg-gray-400 ' >Enregistrer </button>
                <Link to='/Eleves' className='p-2 bg-blue-500  rounded-xl text-white shadow-md shadow-gray-300 hover:bg-gray-400 text-center'>Consulter </Link>

                </div>
                </div>
                <div className='w-1/3 mt-10 p-3' >
                <p className=' text-center font-semibold mb-8 text-gray-600 border-b-[3px] pb-2'> Enseignant Place</p>
                <div>
                <img src={teacher} className=" flex justify-center shadow-md px-3 mb-5"alt="" />

                </div>
                <div className='flex flex-col gap-5'>
                <button onClick={() => setShowMaitre(true) } className='p-2 bg-blue-500  hover:bg-gray-400 rounded-xl text-white shadow-md shadow-gray-300  '>Enregistrer </button>
                <Link  to="/Prof"  className='p-2 bg-blue-500  rounded-xl hover:bg-gray-400 text-white shadow-md text-center shadow-gray-300  '>Consulter </Link>

                </div>
                
              
              
                </div>
               
                </div>
           
    
                
                </div>

            </div>
        
        </div>
      
    </div>
  )
}

export default Menu
