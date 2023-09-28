import React from 'react'
import { useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import html2pdf from 'html2pdf.js';
import { SalleDispo } from './constants';
import { Etudiants } from './constants';
import { Sequences } from './constants';
import { Link } from 'react-router-dom';


const students = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      birhday:'20-01-2001',
      lieu:'Bonaberi',
      classe:'CM2',
      grades: [90, 85, 78, 92],
      Appreciation:'tres bon eleves',
      Subjects:['Mathematique','Physique','Histoire','Chimie'],
      Sequences: 'Sequence 1',
      
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      birhday:'20-01-2001',
      lieu:'Yaounde',
      classe:'CM2',
      grades: [88, 95, 82, 78],
      Subjects:['Mathematique','Physique','Histoire','Chimie'],
      Sequences: 'Sequence 2'
    },
    // ... Autres élèves
  ];
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      fontFamily: 'Helvetica',
      
    },
    entete:{
        fontSize: 10,
      
      fontWeight: 'bold',

    },
    titre:{
    
        fontSize: 10,
        marginTop: 3,
        marginBottom: 3,
        textAlign: 'center',
        flexDirection: 'row',

       
        

    },
    containe:{
        flexDirection: 'row',
      
    alignItems: 'center', // Centrer verticalement
    justifyContent: 'space-between',
   
    },
    bul:{
        marginTop: 5,
        backgroundColor: 'gray',
        paddingVertical: 2,
        marginBottom: 5,
        fontSize: 12,
        fontWeight: 'bold',
        width: '230px',
        textAlign: 'center', 
        borderRadius: '5px'

    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    noms:{
        fontSize: 13,
        marginTop: 2,
        marginBottom: 3
    },
    infoBlock: {
      marginBottom: 20,
    },
    subjectRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottom: 1,
      padding: 8,
    },
    subjectName: {
      flexGrow: 1,
    },
    min:{
        fontSize: 10,
        alignItems: 'center',
        textAlign: 'center',

    },
    ecole:{
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
       
    },
    grade: {
      width: 40,
      textAlign: 'center',
    },
    average: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
    },
    comments: {
      marginTop: 20,
    },
  });
  
const Bulletin = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showSelect, setShowSelect] = useState(false)
    const [showmasse, setShowMasse] = useState(false)
    const calculateAverage = (grades) => {
      const total = grades.reduce((sum, grade) => sum + grade, 0);
      return total / grades.length;
    };
  
    const generatePDF = () => {
      const content = document.getElementById('pdf-content');
      html2pdf().from(content).save();
    };
  
    return (
      <div className="p-4  bg-white ml-[280px]">
        <h2 className="text-3xl font-semibold mb-4 text-gray-600 text-center border-b-[2px] py-3">Generer bulletins d'Étudiant</h2>
        <div className=' bg-gray-100 rounded text-black  py-5 flex justify-center gap-[50px] shadow-md shadow-gray-400'>
        <button className={`${showSelect ? 'bg-gray-500' : 'bg-blue-500' } text-white rounded-xl p-2 `} onClick={() => setShowSelect(!showSelect)}>{showSelect ? 'Annuler la generation ': 'Generer par selection'}</button>
        <button className={`${showmasse ? 'bg-gray-500' : 'bg-green-500' } text-white rounded-xl p-2 `} onClick={() => setShowMasse(!showmasse)}>{showmasse ? 'Annuler la generation' : 'Generer en masse'}</button>
        
        </div>
        {showSelect && (
             <div>
             <h3 className=" mt-8 text-lg font-semibold mb-2 text-black px-[90px] ">Sélectionnez un étudiant :</h3>
             <select
               value={selectedStudent}
               onChange={(e) => setSelectedStudent(parseInt(e.target.value))}
               className="border-none shadow-md shadow-gray-400 bg-blue-500  rounded p-2 text-white rounded-lg  "
             >
               <option value={null} className='text-black bg-white text-black  '>Sélectionnez un étudiant</option>
               {students.map((student) => (
                 <option key={student.id} value={student.id} className='bg-white text-black '>
                   {student.firstName} {student.lastName}
                 </option>
               ))}
             </select> 
             <input type="text" placeholder='Rechercher un etudiants ' className='ml-[50px] border-[1px] py-2 rounded-xl shadow-inner shhadow-gray-400 text-[14px] w-[300px] text-center bg-gray-100' />
           </div>
        )}
        {showmasse && (
            <div>
                <h1 className='text-black font-bold text-center mt-5 text-[20px] border-b-[2px] py-3'>Générer selecteur</h1>
                <div className='flex gap-12 justify-center'>
                <select name="" id="" className='  text-black p-2 rounded-xl  mt-5 bg-transparent shadow shadow-gray-500 text-black '>
                    <option value={null} > choix de la classe</option>
                    {SalleDispo.map(salle => (
                        <option value={salle.id}>{salle.id }</option>
                    ))}
                </select>
                <select name="" id="" className='border-[1px] border-black text-black p-2 rounded-xl mt-5 bg-gray-200 text-black border-none bg-transparent shadow shadow-gray-500'>
                    <option value={null}>choix de l'examen</option>
                    {Sequences.map(seq => (
                        <option value={seq}>{seq}</option>
                    ))}
                </select>
                </div>
                <div className='text-black flex justify-center mt-[30px]'>
                    <table className=' rounded  '>
                        <thead className='text-white bg-blue-600'>
                            <th className='w-[200px]'>Noms</th>
                            <th className='w-[200px]'>Prenom</th>
                            <th className='w-[200px]'>Sequence</th>
                            <th className='w-[200px]'>Moyenne</th>
                            <th className='w-[200px]'>Appreciation</th>
                        </thead>
                    </table>
                </div>
                
            </div>
        )}
       
  
        {selectedStudent !== null && (
          <div className="mt-4 text-black  w-full h-screen ">
            <p className='mb-5'>
              Moyenne de {students.find((student) => student.id === selectedStudent).firstName}{' '}
              {students.find((student) => student.id === selectedStudent).lastName} :{' '}
              {calculateAverage(
                students.find((student) => student.id === selectedStudent).grades
              ).toFixed(2)}
            </p>
            <PDFDownloadLink
              document={<StudentReportPDF student={students.find((student) => student.id === selectedStudent)} />}
              fileName={`Bulletin_${selectedStudent}.pdf`}
              className=" bg-blue-500 text-white px-4 py-2 rounded my-5"
            >
            Télécharger le Bulletin PDF
            </PDFDownloadLink>
          </div>
        )}
      </div>
    );
  };
  
  const StudentReportPDF = ({ student }) => (
    <Document>
      <Page size="A4" style={styles.container}>
        <View style={styles.containe}>
            <View>
            <Text style={styles.entete} >REPUBLIQUE DU CAMEROUN </Text>
            <Text style={styles.titre}>Paix-Travail-Patrie</Text>
            <Text style={styles.min}>MINISTERE DES ENSEIGENEMENTS PRIMAIRE</Text>
            <Text style={styles.ecole}>ECOLE PRIMAIRE BILINGUE </Text>
            <Text style={styles.ecole}> EL-KAMIT</Text>
            </View>
        <View>
        <Text style={styles.entete} >REPUBLIC OF CAMEROUN </Text>
        <Text style={styles.titre}>Paix-Travail-Patrie</Text>
        <Text style={styles.min}>MINISTRY OF PRIMARY EDUCATION</Text>
        <Text style={styles.ecole}>BILINGUAL PRIMARY SCHOOL </Text>
        <Text style={styles.ecole}>  ELKAMIT</Text>
        </View>
       

        </View>
       <Text style={styles.bul}>BULLETIN DE NOTE DU {student.Sequences}</Text>
       <Text style={styles.noms}>Noms et Prenoms : {student.firstName} {student.lastName}</Text>
       <Text style={styles.noms}> Date et Lieu de Naissance : ...{student.birhday} à {student.lieu }</Text>
        <Text>Bulletin de {student.firstName} {student.lastName}</Text>
        <Text>Moyenne : {calculateAverage(student.grades).toFixed(2)}</Text>
        <Text>Appreciations : {student.Appreciation}</Text>
        <Text>Classe: {student.classe} Effectif.... Titulaire:</Text>
      </Page>
    </Document>
  );
  
  const calculateAverage = (grades) => {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
  };
  

export default Bulletin
