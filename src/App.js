import React from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Display from './Display';
import { InfoProvider } from './Context';
import './style.css';

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}> Course Registration</h1>
      <InfoProvider >
        <Form1 />
        <Form2/>
        <Form3/>
        <Display/>
      </InfoProvider>
    </div>
  );
}
