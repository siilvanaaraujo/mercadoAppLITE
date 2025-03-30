import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div>
      <h1>Mercado Online</h1>
      <Register />
      <Login />
      <ProductForm />
    </div>
  );
}

export default App;