import React, { useState } from 'react';

const students = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    totalFee: 150000,
    paidAmount: 50000,
    payments: [
      { date: '2023-08-01', amount: 30000 },
      { date: '2023-08-15', amount: 20000 },
    ],
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    totalFee: 150000,
    paidAmount: 100000,
    payments: [
      { date: '2023-08-05', amount: 50000 },
      // ...
    ],
  },
  // ... Ajoutez d'autres étudiants ici
];

const PaymentSystem = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
  
    const handleStudentChange = (event) => {
      const studentId = parseInt(event.target.value);
      setSelectedStudent(studentId);
    };
  
    const selectedStudentData = students.find((student) => student.id === selectedStudent);
  
    return (
      <div className="p-4 text-black w-full bg-white">
        <h2 className="text-xl font-semibold mb-4">Système de Paiement</h2>
        <div className="flex">
          <div className="w-1/3 pr-4">
            <h3 className="text-lg font-semibold mb-2">Étudiants</h3>
            <select
              value={selectedStudent || ''}
              onChange={handleStudentChange}
              className="border rounded p-2 w-full"
            >
              <option value="">Sélectionnez un étudiant</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.firstName} {student.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="w-2/3">
            {selectedStudentData && (
              <StudentPaymentHistory student={selectedStudentData} />
            )}
          </div>
        </div>
      </div>
    );
  };
  
  const StudentPaymentHistory = ({ student }) => {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-2">Historique de Paiement</h3>
        <p>Nom: {student.firstName} {student.lastName}</p>
        <p>Total à payer: {student.totalFee}</p>
        <p>Montant payé: {student.paidAmount}</p>
        <p>Reste à payer: {student.totalFee - student.paidAmount}</p>
        <ul className="mt-4 space-y-2">
          {student.payments.map((payment, index) => (
            <li key={index}>
              {payment.date} - Montant: {payment.amount}
            </li>
          ))}
        </ul>
        <PaymentForm student={student} />
      </div>
    );
  };
  
  const PaymentForm = ({ student }) => {
    const [paymentAmount, setPaymentAmount] = useState('');
  
    const handlePaymentChange = (event) => {
      setPaymentAmount(event.target.value);
    };
  
    const handlePaymentSubmit = (event) => {
      event.preventDefault();
      if (paymentAmount) {
        const newPayment = {
          date: new Date().toISOString().split('T')[0],
          amount: parseInt(paymentAmount),
        };
        // Ajouter le nouveau paiement aux données de l'étudiant
        student.payments.push(newPayment);
        student.paidAmount += newPayment.amount;
        setPaymentAmount('');
      }
    };
  
    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Ajouter un Paiement</h3>
        <form onSubmit={handlePaymentSubmit}>
          <input
            type="number"
            placeholder="Montant du paiement"
            value={paymentAmount}
            onChange={handlePaymentChange}
            className="border rounded p-2 mr-2"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Enregistrer Paiement
          </button>
        </form>
      </div>
    );
  };
  
  export default PaymentSystem;