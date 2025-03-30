const express = require('express');
const router = express.Router();
const axios = require('axios');

// Rota para buscar produtos
router.get('/products', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/api/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erro ao buscar produtos');
  }
});

// Rota para registrar usuário
router.post('/register', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5000/api/register', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erro ao registrar usuário');
  }
});

// Rota para login de usuário
router.post('/login', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erro ao fazer login');
  }
});

module.exports = router;