const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.static('../frontend/public'));

// Rota para buscar produtos do Flask
app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/api/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erro ao buscar produtos');
  }
});

// Rota para cadastrar produtos no Flask
app.post('/api/products', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5000/api/products', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erro ao cadastrar produto');
  }
});

app.listen(3000, () => {
  console.log('Servidor Node.js rodando na porta 3000');
});