const express = require('express');

require('dotenv').config();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use(express.json());
// Middleware para aceitar JSON
app.use('/users', userRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});